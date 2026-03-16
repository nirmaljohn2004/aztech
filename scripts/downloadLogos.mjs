import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "../public/images/brands");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const logos = [
  {
    name: "Christie",
    filename: "christie.png",
    url: "https://www.christiedigital.com/globalassets/resources/logos/christie-logo.png",
  },
  {
    name: "Crestron",
    filename: "crestron.png",
    url: "https://www.crestron.com/getmedia/6f3a3b5e-2a2e-4e1e-8f1a-2b3c4d5e6f7a/crestron-logo.png",
  },
  {
    name: "Extron",
    filename: "extron.png",
    url: "https://www.extron.com/images/extensionless/extron-logo.png",
  },
  {
    name: "JBL",
    filename: "jbl.png",
    url: "https://www.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites/default/default/images/JBL_logo_white.png",
  },
  {
    name: "Kramer",
    filename: "kramer.png",
    url: "https://www.kramerav.com/images/kramer-logo.png",
  },
  {
    name: "Samsung",
    filename: "samsung.png",
    url: "https://image-us.samsung.com/SamsungUS/home/mobile/galaxy/all-galaxy/06032019/Samsung_wordmark_white.png",
  },
  {
    name: "LG",
    filename: "lg.png",
    url: "https://www.lg.com/content/dam/channel/wcms/en/images/logo/LG_logo.png",
  },
  {
    name: "Bosch",
    filename: "bosch.png",
    url: "https://www.boschsecurity.com/xc/en/news/brand-logo/bosch-logo.png",
  },
  {
    name: "Hikvision",
    filename: "hikvision.png",
    url: "https://www.hikvision.com/content/dam/hikvision/en/others/logo/hikvision-logo-white.png",
  },
  {
    name: "Barco",
    filename: "barco.png",
    url: "https://www.barco.com/~/media/images/barco-logo-white.ashx",
  },
  {
    name: "Bose",
    filename: "bose.png",
    url: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/logo/bose-logo-white.png",
  },
  {
    name: "Sony",
    filename: "sony.png",
    url: "https://www.sony.com/en/img/sony_logo_white.png",
  },
];

function download(url, dest, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 8) {
      reject(new Error("Too many redirects"));
      return;
    }

    const file = fs.createWriteStream(dest);
    const protocol = url.startsWith("https") ? https : http;

    const req = protocol.get(
      url,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          Accept: "image/png,image/svg+xml,image/*,*/*",
          Referer: "https://google.com",
        },
      },
      (res) => {
        if ([301, 302, 307, 308].includes(res.statusCode)) {
          file.close();
          try {
            fs.unlinkSync(dest);
          } catch {}

          const redirectUrl = new URL(res.headers.location, url).toString();
          download(redirectUrl, dest, redirectCount + 1).then(resolve).catch(reject);
          return;
        }

        if (res.statusCode !== 200) {
          file.close();
          try {
            fs.unlinkSync(dest);
          } catch {}
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }

        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      },
    );

    req.on("error", (err) => {
      try {
        fs.unlinkSync(dest);
      } catch {}
      reject(err);
    });
  });
}

async function run() {
  console.log("Downloading brand logos...\n");
  const failed = [];

  for (const logo of logos) {
    const dest = path.join(OUTPUT_DIR, logo.filename);

    try {
      await download(logo.url, dest);
      const kb = (fs.statSync(dest).size / 1024).toFixed(1);
      console.log(`OK  ${logo.name.padEnd(15)} ${kb} KB`);
    } catch (err) {
      console.log(`FAIL ${logo.name.padEnd(15)} ${err.message}`);
      failed.push(logo);
    }
  }

  if (failed.length > 0) {
    console.log("\nThese need manual download:");
    failed.forEach((logo) => console.log(`- ${logo.name}: ${logo.url}`));
  }

  console.log("\nDone.");
}

run();

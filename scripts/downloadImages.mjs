import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "../public/images/products");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const images = [
  {
    filename: "hd-led.jpg",
    url: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    filename: "indoor-led.jpg",
    url: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    filename: "outdoor-dip.jpg",
    url: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    filename: "outdoor-smd.jpg",
    url: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    filename: "transparent-led.jpg",
    url: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    filename: "curtain-led.jpg",
    url: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    filename: "floor-led.jpg",
    url: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    filename: "poster-led.jpg",
    url: "https://images.pexels.com/photos/3585095/pexels-photo-3585095.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    filename: "perimeter-led.jpg",
    url: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    filename: "curve-led.jpg",
    url: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    filename: "spherical-led.jpg",
    url: "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    filename: "creative-led.jpg",
    url: "https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function download(url, dest, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    if (redirectCount > 5) {
      reject(new Error("Too many redirects"));
      return;
    }

    const file = fs.createWriteStream(dest);
    const protocol = url.startsWith("https") ? https : http;

    const req = protocol.get(
      url,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; image-downloader/1.0)",
        },
      },
      (response) => {
        if (
          response.statusCode === 301 ||
          response.statusCode === 302 ||
          response.statusCode === 307
        ) {
          file.close();
          try {
            fs.unlinkSync(dest);
          } catch {}
          download(response.headers.location, dest, redirectCount + 1)
            .then(resolve)
            .catch(reject);
          return;
        }

        if (response.statusCode !== 200) {
          file.close();
          try {
            fs.unlinkSync(dest);
          } catch {}
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }

        response.pipe(file);
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
  console.log("Downloading LED product images to public/images/products/\n");

  for (const img of images) {
    const dest = path.join(OUTPUT_DIR, img.filename);
    try {
      await download(img.url, dest);
      const size = (fs.statSync(dest).size / 1024).toFixed(0);
      console.log(`OK  ${img.filename.padEnd(22)} ${size} KB`);
    } catch (err) {
      console.log(`FAIL  ${img.filename.padEnd(22)} ${err.message}`);
    }
  }

  console.log("\nDone. Update your products array to use /images/products/[filename]");
}

run();

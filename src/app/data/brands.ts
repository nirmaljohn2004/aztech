export type Brand = {
  name: string;
  color: string;
  logo?: string;
  logoAlt?: string;
  logoClassName?: string;
};

export const brands: Brand[] = [
  {
    name: "Christie",
    color: "#E8B84B",
    logo: "/images/brands/christie.svg",
    logoAlt: "Christie logo",
  },
  {
    name: "Crestron",
    color: "#60A5FA",
    logo: "/images/brands/crestron-logo.png",
    logoAlt: "Crestron logo",
  },
  { name: "Extron", color: "#8BD3FF" },
  { name: "JBL", color: "#E8F4FF" },
  { name: "Kramer", color: "#60A5FA" },
  { name: "Samsung", color: "#8BD3FF" },
  { name: "LG", color: "#E8B84B" },
  { name: "Bosch", color: "#E8F4FF" },
  { name: "Hikvision", color: "#60A5FA" },
  {
    name: "Barco",
    color: "#E8B84B",
    logo: "/images/brands/barco-web-logo.svg",
    logoAlt: "Barco logo",
  },
  {
    name: "Bose",
    color: "#E8F4FF",
    logo: "/images/brands/bose.svg",
    logoAlt: "Bose logo",
  },
  {
    name: "Panasonic",
    color: "#8BD3FF",
    logo: "/images/brands/panasonic.svg",
    logoAlt: "Panasonic logo",
  },
  { name: "Sony", color: "#8BD3FF" },
];

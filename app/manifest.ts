import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fomin — websites, bots and scripts",
    short_name: "fomin()",
    description:
      "Websites, Telegram bots and Python scripts, built to spec. Fixed price, 50% upfront.",
    start_url: "/ru",
    display: "standalone",
    background_color: "#f7f4ec",
    theme_color: "#cf2e18",
    icons: [
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

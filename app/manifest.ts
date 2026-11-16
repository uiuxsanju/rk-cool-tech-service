import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RK Cool Tech Services",
    short_name: "RK Cool Tech",
    description: "AC repair & home appliance service in Visakhapatnam (Vizag).",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#2f6fb5",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

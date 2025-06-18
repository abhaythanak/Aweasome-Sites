import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   host: "192.168.2.104",
  //   port: 5173, // Optional, if you want to stick to 5173
  // },
  plugins: [react()],
});

// http://192.168.2.101:5173/

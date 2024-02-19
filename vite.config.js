import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import eslint from "vite-plugin-eslint";
import vitePluginRequire from "vite-plugin-require";

export default defineConfig(() => {
    return {
        // https://github.com/vitejs/vite/issues/1973#issuecomment-787571499
        define: {
            "process.env": {},
        },
        server: {
            port: 3000,
            open: true,
        },
        resolve: {
            alias: {
                "~": "/src",
            },
        },
        build: {
            outDir: "build",
        },
        preview: {
            port: 3000,
        },
        plugins: [react(), svgr({ svgrOptions: { icon: true } }), vitePluginRequire.default(), eslint()],
        base: "/ecommerce-se-api-integrate/"
    };
});

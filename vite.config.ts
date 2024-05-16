import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
    plugins: [dts()],
    build: {
        lib: {
            entry: "./src/main.ts",
            name: "tonumber",
            fileName: "tonumber",
            formats: ["es", "umd"],
        }
    }
})
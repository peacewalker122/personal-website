import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		viteStaticCopy({
			targets: [
				{
					src: "post/*.md",
					dest: "post/",
				},
				{
					src: "./metadata.json",
					dest: "metadata.json",
				},
			],
		}),
	],
	publicDir: "public",
	assetsInclude: ["**/*.md"],
});

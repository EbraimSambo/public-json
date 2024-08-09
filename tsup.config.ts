import { defineConfig } from "tsup";

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  splitting: true,
  clean: true,
  minify: true,
  sourcemap: true,
  dts: true,
  })
  
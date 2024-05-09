/// <reference types="vitest" />

import path from "path";
import fs from "fs";

import { defineConfig, loadEnv } from "vite";
// import ssr from 'vite-plugin-ssr/plugin';

const rootPath = __dirname;

const basePath = path.resolve(rootPath, "./src");
const srcDirs = fs
  .readdirSync(basePath)
  .filter((name) => fs.lstatSync(path.join(basePath, name)).isDirectory());

const srcAliases = srcDirs.reduce(
  (acc: unknown, name: unknown) => ({
    ...acc,
    [`~${name}`]: `${path.resolve(rootPath, "src")}/${name}`,
  }),
  {}
);

export default ({ mode }: { mode: string }) => {
  const viteEnv = loadEnv(mode, "./envs");
  process.env = { ...process.env, ...viteEnv };

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [],
    envDir: "./envs",
    resolve: {
      alias: {
        ...srcAliases,
      },
    },

    server: {
      port: 3000,
    },
  });
};

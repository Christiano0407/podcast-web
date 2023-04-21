import { defineConfig } from 'vite';
//import { dirname, resolve } from 'path';
//const __dirname = resolve(dirname(''));
export default defineConfig(() => {
  const port = 3000;
  return {
    server: {
      port,
    },
  };
});

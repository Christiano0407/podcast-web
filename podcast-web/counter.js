import { defineConfig } from 'vite';
import { dirname, resolve } from 'path';
const __dirname = resolve(dirname(''));

export default defineConfig(({ command, mode }) => {
  const port = 3000;

  console.log(command, mode);

  if (mode === 'development') {
    console.log('Dev');
    return {
      server: {
        port,
      },
    };
  } else {
    console.log('State Production - Build');
  }
});

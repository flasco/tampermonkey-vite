const path = require('path');
const { defineConfig } = require('vite');
const styleImport = require('vite-plugin-babel-import');
const OptimizationPersist = require('vite-plugin-optimize-persist');
const PkgConfig = require('vite-plugin-package-config');

const reqUMDInject = require('./plugins/require-umd-inject');

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [
    PkgConfig.default(),
    OptimizationPersist.default(),
    styleImport.default([
      {
        libraryName: '@arco-design/web-react',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
        style: name => `@arco-design/web-react/es/${name}/style/css.js`,
      },
    ]),
    reqUMDInject(),
  ],
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
  build: {
    write: false,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        format: 'iife',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

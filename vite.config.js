import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import postcss from './postcss.config.js'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss,
    modules: {
      generateScopedName: 'tmr-tree-select__[local]--[hash:base64:5]',
    },
  },
  build: {
    sourcemap: true,
    minify: 'terser', // Use 'terser' for minifying JavaScript
    terserOptions: {
      compress: {
        drop_console: true, // Optionally remove console.log statements
      },
    },
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      name: 'TMRTreeSelect',
      fileName: format => {
        // Return base filename, will be placed in different directories by `rollupOptions`
        return 'index.min.js'
      },
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        // This will ensure UMD build goes to root of dist
        dir: path.resolve(__dirname, 'dist'),
        entryFileNames: 'index.min.js',
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    // Adjust for specific output directory structure
    outDir: path.resolve(__dirname, 'dist'),
  },
})

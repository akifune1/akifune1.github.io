/**
 * @file vite.config.js
 * @description Configuration for Vite bundler and development server.
 * Hardens production builds by disabling source maps, stripping console/debugger statements,
 * and enforcing esbuild minification for high-security, compact distribution.
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite Configuration Function
 * Provides configuration options for local development and hardened production distribution.
 *
 * @param {object} env - Vite build environment context.
 * @param {string} env.mode - Active build mode ('development' | 'production').
 * @returns {import('vite').UserConfig} Configured Vite options.
 */
export default defineConfig(({ mode }) => {
  // Check if current command is a production build (npm run build)
  const isProduction = mode === 'production';

  return {
    // Relative base path ensures assets and public files resolve correctly on GitHub Pages
    // whether hosted at akifune1.github.io or akifune1.github.io/<repo-name>/
    base: './',
    plugins: [react()],
    server: {
      port: 3000,
      open: false,
    },
    // Production build hardening settings
    build: {
      // Explicitly disable source maps to prevent exposing raw JSX source code in DevTools
      sourcemap: false,
      // Aggressive minification and identifier mangling (single-character renaming, whitespace removal)
      minify: 'esbuild',
      // Inline small assets under 4KB to reduce extra network requests
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          // Clean hashed asset filenames to prevent cache collisions and enforce cache-busting
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
    },
    esbuild: {
      // Strip console logs, warnings, and debugger statements in production builds to prevent diagnostic leakage
      drop: isProduction ? ['console', 'debugger'] : [],
      // Remove legal/license comments from bundle output to minimize inspectable footprint
      legalComments: 'none',
    },
  };
});


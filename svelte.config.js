import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

export default {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter({
      fallback: 'index.html',
    }),
    paths: {
      base: '/adityak1121.github.io',
    },
    prerender: {
      handleHttpError: 'warn',
    }
	}
};
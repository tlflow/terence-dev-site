import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import lottie from 'astro-integration-lottie'
// import purgecss from "astro-purgecss";

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
	integrations: [vue(), mdx(), lottie()],
	// integrations: [vue(), purgecss()],
})

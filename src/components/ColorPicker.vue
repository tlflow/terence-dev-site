<script setup>
import { ref } from "vue";

import { useColorMode, useCycleList } from '@vueuse/core'
import { watchEffect } from "vue";

const mode = useColorMode({
  attribute: 'theme',
  modes: {
    // custom colors
    contrast: 'contrast',
    dim: 'dim',
    cafe: 'cafe',
  }
})

const options = [
  'dark',
  'hotairballoon',
  'cafe',
  'contrast',
  'auto'
]

const { state, next } = useCycleList(options, { initialValue: mode });

watchEffect(() => mode.value = state.value)


</script>

<template>
  <button @click="next()">
    <i v-if="state === 'dark'"
       i-carbon-moon
       inline-block
       align-middle
       class="align-middle" />
    <i v-if="state === 'light'"
       i-carbon-sun
       inline-block
       align-middle
       class="align-middle" />
    <i v-if="state === 'cafe'"
       i-carbon-cafe
       inline-block
       align-middle
       class="align-middle" />
    <i v-if="state === 'hotairballoon'"
       i-carbon-cafe
       inline-block
       align-middle
       class="align-middle" />
    <i v-if="state === 'contrast'"
       i-carbon-contrast
       inline-block
       align-middle
       class="align-middle" />
    <i v-if="state === 'auto'"
       i-carbon-laptop
       inline-block
       align-middle
       class="align-middle" />

    <span class="ml-2 capitalize">{{ state }}</span>
  </button>

  <span class="p-4 opacity-50">← Click to change the color mode</span>
</template>

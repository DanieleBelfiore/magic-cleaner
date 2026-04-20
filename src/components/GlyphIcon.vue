<template>
  <div class="glyph" :style="{ width: size + 'px', height: size + 'px', color: color || 'currentColor' }" v-html="svg" />
</template>

<script setup>
import { computed } from 'vue'
import { GLYPHS } from '../data/glyphs.js'
import '../styles/glyph-icon.css'

const props = defineProps({
  name: {
    type: String,
    required: true,
    validator: (v) => v in GLYPHS,
  },
  size: { type: Number, default: 48 },
  color: { type: String, default: null },
})

const svg = computed(() => GLYPHS[props.name] || GLYPHS.soap)
</script>

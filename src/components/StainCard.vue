<template>
  <button class="stain-card" @click="$emit('click')">
    <div class="swatch">
      <span class="stain-icon">{{ stainIcon }}</span>
    </div>
    <div class="card-footer">
      <span class="card-name">{{ stain[lang].name }}</span>
      <UrgencyDots :level="stain.urgency" />
    </div>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import UrgencyDots from './UrgencyDots.vue'
import { STAIN_ICONS } from '../data/glyphs.js'
import '../styles/stain-card.css'

const props = defineProps({
  stain: { type: Object, required: true },
  lang: { type: String, required: true },
})

defineEmits(['click'])

const stainIcon = computed(() => STAIN_ICONS[props.stain.id] ?? '')
</script>

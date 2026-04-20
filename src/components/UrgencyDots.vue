<template>
  <div class="urgency-dots">
    <span v-for="n in 3" :key="n" class="dot" :class="{ active: n <= level }" />
  </div>
</template>

<script setup>
import '../styles/urgency-dots.css'

defineProps({
  level: { type: Number, required: true },
})
</script>

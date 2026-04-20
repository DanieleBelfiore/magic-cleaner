<template>
  <div class="done">
    <h1 class="done-title">{{ t.finishTitle }}</h1>
    <p class="done-body">{{ t.finishBody }}</p>
    <button class="done-btn" @click="$emit('another')">{{ t.anotherStain }}</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { I18N } from '../data/stains.js'
import '../styles/done.css'

const props = defineProps({
  lang: { type: String, required: true },
})

defineEmits(['another'])

const t = computed(() => I18N[props.lang])
</script>

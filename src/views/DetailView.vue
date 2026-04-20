<template>
  <div class="detail">
    <div class="top-bar">
      <button class="back-btn" @click="$emit('back')">← {{ t.back }}</button>
      <span class="tag-label">{{ stain[lang].tag }}</span>
    </div>

    <div class="scroll-area">
      <div class="stain-header">
        <svg viewBox="0 0 100 100" class="stain-preview" :style="{ filter: `drop-shadow(0 2px 0 ${stain.color}30)` }">
          <path d="M50 20 C30 20 20 40 30 55 C20 60 20 75 35 78 C40 90 65 88 68 78 C82 78 85 60 75 55 C80 38 65 20 50 20 Z"
            :fill="stain.color" opacity="0.88" />
          <circle cx="20" cy="30" r="3" :fill="stain.color" opacity="0.5" />
          <circle cx="82" cy="38" r="2" :fill="stain.color" opacity="0.4" />
          <circle cx="78" cy="86" r="2.5" :fill="stain.color" opacity="0.5" />
        </svg>
        <div class="stain-info">
          <h2 class="stain-name">{{ stain[lang].name }}</h2>
          <div class="urgency-row">
            <UrgencyDots :level="stain.urgency" />
            <span class="urgency-label">{{ t.urgency[stain.urgency] }}</span>
          </div>
        </div>
      </div>

      <div class="window-card">
        <div>
          <div class="window-label">{{ t.windowLabel }}</div>
          <div class="window-value">{{ t.window(stain.windowMin) }}</div>
        </div>
        <GlyphIcon name="wait" :size="40" color="var(--accent)" />
      </div>

      <div class="section">
        <h3 class="section-title">{{ t.pickFabric }}</h3>
        <p class="section-hint">{{ t.pickFabricHint }}</p>
        <div class="pill-group">
          <button
            v-for="f in t.fabrics"
            :key="f.id"
            class="pill"
            :class="{ active: fabric === f.id }"
            @click="fabric = f.id"
          >{{ f.name }}</button>
        </div>
      </div>

      <div class="section age-section">
        <h3 class="section-title">{{ t.age }}</h3>
        <div class="age-group">
          <button
            v-for="a in t.ages"
            :key="a.id"
            class="age-btn"
            :class="{ active: age === a.id }"
            @click="age = a.id"
          >{{ a.name }}</button>
        </div>
      </div>
    </div>

    <div class="cta-bar">
      <button class="cta-btn" @click="$emit('start', { fabric: fabric, age: age })">
        {{ t.start }} <span>→</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { I18N } from '../data/stains.js'
import UrgencyDots from '../components/UrgencyDots.vue'
import GlyphIcon from '../components/GlyphIcon.vue'
import '../styles/detail.css'

const props = defineProps({
  stain: { type: Object, required: true },
  lang: { type: String, required: true },
})

defineEmits(['back', 'start'])


const t = computed(() => I18N[props.lang])
const fabric = ref('cotton')
const age = ref('fresh')
</script>

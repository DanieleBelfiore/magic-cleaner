<template>
  <div class="tutorial">
    <div class="top-bar">
      <button class="back-btn" @click="onBack">← {{ t.prev }}</button>
      <span class="step-counter">{{ t.step }} {{ stepIdx + 1 }} / {{ steps.length }}</span>
    </div>

    <div class="progress-wrap">
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: pct + '%' }" />
      </div>
    </div>

    <div class="scroll-area">
      <div class="step-num">{{ stepIdx + 1 }}</div>

      <div class="glyph-wrap">
        <GlyphIcon :name="step.icon" :size="100" />
      </div>

      <h2 class="step-title">{{ step.title }}</h2>
      <p class="step-body">{{ step.body }}</p>

      <div v-if="step.wait" class="timer-card">
        <div>
          <div class="timer-label">{{ t.wait }} · {{ step.wait }} {{ t.minutes }}</div>
          <div class="timer-display">{{ timerStarted ? mmss : `${String(step.wait).padStart(2, '0')}:00` }}</div>
        </div>
        <button class="timer-btn" @click="toggleTimer">
          {{ waiting ? t.pause : (timerStarted ? t.resume : t.start_timer) }}
        </button>
      </div>

      <div v-if="step.tip" class="tip-card">
        <span class="card-micro">{{ t.tip }}</span>{{ step.tip }}
      </div>

      <div v-if="step.warn" class="warn-card">
        <span class="card-micro">⚠ {{ t.warn }}</span>{{ step.warnText }}
      </div>

      <div v-if="fabricNote" class="fabric-note-card">
        <span class="card-micro">{{ t.fabricNote }}</span>{{ fabricNote }}
      </div>
    </div>

    <div class="nav-bar">
      <button class="nav-prev" @click="onBack">← {{ t.prev }}</button>
      <button class="nav-next" @click="onNext">
        {{ stepIdx < steps.length - 1 ? t.next : t.finish }} →
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'
import { I18N } from '../data/stains.js'
import GlyphIcon from '../components/GlyphIcon.vue'
import '../styles/tutorial.css'

const props = defineProps({
  stain: { type: Object, required: true },
  lang: { type: String, required: true },
  fabric: { type: String, default: 'cotton' },
  age: { type: String, default: 'fresh' },
})

const emit = defineEmits(['back', 'finish'])

const t = computed(() => I18N[props.lang])
const steps = computed(() => props.stain.steps[props.lang])
const stepIdx = ref(0)
const step = computed(() => steps.value[stepIdx.value])
const pct = computed(() => ((stepIdx.value + 1) / steps.value.length) * 100)

const waiting = ref(false)
const remaining = ref(0)
let timerId = null

watch(stepIdx, () => {
  clearInterval(timerId)
  waiting.value = false
  timerStarted.value = false
  remaining.value = (step.value.wait || 0) * 60
})

onUnmounted(() => clearInterval(timerId))

const mmss = computed(() => {
  const m = Math.floor(remaining.value / 60)
  const s = remaining.value % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
})

const timerStarted = ref(false)

function toggleTimer() {
  if (waiting.value) {
    clearInterval(timerId)
    waiting.value = false
  } else {
    if (!timerStarted.value) {
      remaining.value = step.value.wait * 60
      timerStarted.value = true
    }
    waiting.value = true
    timerId = setInterval(() => {
      remaining.value--
      if (remaining.value <= 0) {
        clearInterval(timerId)
        waiting.value = false
        timerStarted.value = false
      }
    }, 1000)
  }
}

const fabricNote = computed(() => {
  if (props.fabric === 'delicate') {
    return props.lang === 'it'
      ? 'Tessuto delicato: usa prodotti neutri, no sfregamento, asciuga piatto.'
      : 'Delicate fabric: use neutral products, no rubbing, dry flat.'
  }
  if (props.age === 'old') {
    return props.lang === 'it'
      ? 'Macchia secca: potrebbe servire un secondo ciclo, sii paziente.'
      : 'Dried stain: may need a second pass — be patient.'
  }
  return null
})

function onBack() {
  if (stepIdx.value > 0) stepIdx.value--
  else emit('back')
}

function onNext() {
  if (stepIdx.value < steps.value.length - 1) stepIdx.value++
  else emit('finish')
}
</script>

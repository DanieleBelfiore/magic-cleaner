<template>
  <div class="app-shell">
    <HomeView
      v-if="screen.name === 'home'"
      :lang="lang"
      @toggle-lang="toggleLang"
      @pick="pickStain"
    />
    <DetailView
      v-else-if="screen.name === 'detail' && activeStain"
      :stain="activeStain"
      :lang="lang"
      @back="goHome"
      @start="goTutorial"
    />
    <TutorialView
      v-else-if="screen.name === 'tutorial' && activeStain"
      :stain="activeStain"
      :lang="lang"
      :fabric="screen.fabric || 'cotton'"
      :age="screen.age || 'fresh'"
      @back="goDetail"
      @finish="goDone"
    />
    <DoneView
      v-else-if="screen.name === 'done'"
      :lang="lang"
      @another="goHome"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import './styles/app.css'
import { STAINS } from './data/stains.js'
import HomeView from './views/HomeView.vue'
import DetailView from './views/DetailView.vue'
import TutorialView from './views/TutorialView.vue'
import DoneView from './views/DoneView.vue'

const savedScreen = (() => {
  try {
    const s = JSON.parse(localStorage.getItem('mc.screen'))
    if (s?.stainId && !STAINS.find(st => st.id === s.stainId)) return null
    return s
  } catch { return null }
})()

const screen = ref(savedScreen || { name: 'home' })
const lang = ref('it')

watch(screen, (val) => {
  localStorage.setItem('mc.screen', JSON.stringify(val))
}, { deep: true })

const activeStain = computed(() =>
  screen.value.stainId ? STAINS.find(s => s.id === screen.value.stainId) : null
)

function toggleLang() {
  lang.value = lang.value === 'it' ? 'en' : 'it'
}
function pickStain(stain) {
  screen.value = { name: 'detail', stainId: stain.id }
}
function goHome() {
  screen.value = { name: 'home' }
}
function goDetail() {
  screen.value = { name: 'detail', stainId: screen.value.stainId }
}
function goTutorial(payload) {
  screen.value = {
    name: 'tutorial',
    stainId: screen.value.stainId,
    fabric: payload?.fabric || 'cotton',
    age: payload?.age || 'fresh',
  }
}
function goDone() {
  screen.value = { name: 'done' }
}
</script>

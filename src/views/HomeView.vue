<template>
  <div class="home">
    <div class="top-bar">
      <span class="app-id"></span>
      <button class="lang-toggle" @click="$emit('toggle-lang')">
        <span :class="{ active: lang === 'it' }">IT</span>
        <span class="sep">·</span>
        <span :class="{ active: lang === 'en' }">EN</span>
      </button>
    </div>

    <div class="hero">
      <h1 class="hero-title">
        <template v-if="lang === 'it'">Niente panico.</template>
        <template v-else>Don't panic.</template>
      </h1>
      <p class="hero-sub">
        {{ lang === 'it'
          ? 'Respira. Scegli la macchia, ti guido passo per passo.'
          : `Breathe. Pick the stain, I'll walk you through it.` }}
      </p>
    </div>

    <div class="search-wrap">
      <div class="search-box">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="search-icon">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          v-model="query"
          :placeholder="t.search"
          class="search-input"
          type="search"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        />
      </div>
    </div>

    <div class="tag-rail">
      <button
        v-for="tag in tags"
        :key="tag"
        class="tag-btn"
        :class="{ active: activeTag === tag }"
        @click="activeTag = tag"
      >{{ tag }}</button>
    </div>

    <div class="grid-scroll">
      <div class="stain-grid">
        <StainCard
          v-for="stain in filtered"
          :key="stain.id"
          :stain="stain"
          :lang="lang"
          @click="$emit('pick', stain)"
        />
      </div>
      <div v-if="filtered.length === 0" class="empty">
        {{ lang === 'it' ? 'Nessuna macchia…' : 'No stain…' }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { STAINS, TAGS, I18N } from '../data/stains.js'
import StainCard from '../components/StainCard.vue'
import '../styles/home.css'

const props = defineProps({
  lang: { type: String, required: true },
})

defineEmits(['toggle-lang', 'pick'])

const t = computed(() => I18N[props.lang])
const tags = computed(() => TAGS[props.lang])
const activeTag = ref(TAGS[props.lang][0])
const query = ref('')

watch(() => props.lang, (newLang) => {
  activeTag.value = TAGS[newLang][0]
  query.value = ''
})

const filtered = computed(() => {
  const allTag = TAGS[props.lang][0]
  return STAINS.filter(s => {
    const nameMatch = s[props.lang].name.toLowerCase().includes(query.value.toLowerCase())
    const tagMatch = activeTag.value === allTag || s[props.lang].tag === activeTag.value
    return nameMatch && tagMatch
  })
})
</script>

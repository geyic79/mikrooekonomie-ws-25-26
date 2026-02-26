<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { getSubject } from '@/data/subjects'
import { getExercisesBySubject, getExercise } from '@/data/exercises'
import { useAppStore } from '@/stores/app'
import { renderFormulas } from '@/utils/katex'
import ExerciseContent from '@/components/ExerciseContent.vue'

const route = useRoute()
const router = useRouter()
const store = useAppStore()

const subject = computed(() => getSubject(route.params.id as string))
const exercises = computed(() => getExercisesBySubject(route.params.id as string))

const renderedSummary = computed(() => {
  if (!subject.value) return ''
  const raw = store.language === 'de' ? subject.value.summaryDe : subject.value.summaryEn
  return renderFormulas(raw)
})

function sourceLabel(source: string) {
  const labels: Record<string, [string, string]> = {
    'exercise-sheet': ['Übungsblatt', 'Exercise Sheet'],
    'demo-exam': ['Probeklausur', 'Demo Exam'],
    'exam-wise2425': ['WiSe 24/25', 'WiSe 24/25'],
    'exam-sose25': ['SoSe 25', 'SoSe 25'],
  }
  const l = labels[source]
  return l ? store.t(l[0], l[1]) : source
}

// Split view state
const selectedExerciseId = ref<string | null>(null)
const isDesktop = ref(window.innerWidth >= 1024)

const selectedExercise = computed(() => {
  if (!selectedExerciseId.value) return null
  return getExercise(selectedExerciseId.value)
})

function handleResize() {
  const wasDesktop = isDesktop.value
  isDesktop.value = window.innerWidth >= 1024

  // Close split view if switching from desktop to mobile
  if (wasDesktop && !isDesktop.value && selectedExerciseId.value) {
    selectedExerciseId.value = null
  }
}

function openExercise(exerciseId: string) {
  if (isDesktop.value) {
    selectedExerciseId.value = exerciseId
  } else {
    router.push(`/exercise/${exerciseId}`)
  }
}

function closeSplitView() {
  selectedExerciseId.value = null
}

function expandExercise() {
  if (selectedExerciseId.value) {
    router.push(`/exercise/${selectedExerciseId.value}`)
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div v-if="subject" class="subject-page-wrapper">
    <div class="subject-page" :class="{ 'split-active': selectedExerciseId }">
      <div class="subject-hero" :style="{ borderColor: subject.color }">
        <RouterLink to="/" class="back-link">&#8592; {{ store.t('Alle Themen', 'All Subjects') }}</RouterLink>
        <h1>{{ store.language === 'de' ? subject.titleDe : subject.titleEn }}</h1>
        <p class="hero-desc">{{ store.language === 'de' ? subject.shortDescDe : subject.shortDescEn }}</p>
      </div>

      <div class="subject-actions">
        <!-- Exercises card – full width on top -->
        <div class="action-card exercises-card">
          <div class="exercises-list-wrapper">
            <div class="exercises-header">
              <span class="action-icon">&#128221;</span>
              <strong>{{ store.t('Aufgaben', 'Exercises') }}</strong>
              <span class="action-count">{{ exercises.length }} {{ store.t('verfügbar', 'available') }}</span>
            </div>
            <div v-if="exercises.length" class="exercises-quick-list">
              <button v-for="ex in exercises" :key="ex.id" @click="openExercise(ex.id)"
                class="exercise-quick-item" :class="{ active: selectedExerciseId === ex.id }">
                <span class="eq-title">{{ store.language === 'de' ? ex.titleDe : ex.titleEn }}</span>
                <span class="eq-meta">
                  <span :class="['eq-tag', ex.type === 'choice' ? 'eq-tag-choice' : 'eq-tag-freeform']">
                    {{ ex.type === 'choice' ? 'MC' : store.t('Freitext', 'Free') }}
                  </span>
                  <span class="eq-tag eq-tag-source">{{ sourceLabel(ex.source) }}</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Secondary cards – side by side below -->
        <div class="secondary-cards">
          <div class="action-card" v-if="subject.videoLinks.length">
            <span class="action-icon">&#127909;</span>
            <div>
              <strong>{{ store.t('Videovorlesungen', 'Video Lectures') }}</strong>
              <div class="video-list">
                <a v-for="(v, i) in subject.videoLinks" :key="i" :href="v.url" target="_blank" rel="noopener"
                  class="video-link">{{ store.language === 'de' ? v.titleDe : v.titleEn }}</a>
              </div>
            </div>
          </div>

          <RouterLink :to="`/cheatsheet/${subject.id}`" class="action-card">
            <span class="action-icon">&#128196;</span>
            <div>
              <strong>{{ store.t('Spickzettel', 'Cheat Sheet') }}</strong>
              <span class="action-count">{{ store.t('A4-Übersicht', 'A4 Overview') }}</span>
            </div>
          </RouterLink>
        </div>
      </div>

      <article class="summary-content container-narrow" v-html="renderedSummary"></article>
    </div>

    <!-- Split View Panel -->
    <div v-if="selectedExerciseId && selectedExercise && isDesktop" class="split-panel">
      <div class="split-header">
        <div class="split-controls">
          <button @click="expandExercise" class="split-btn" :title="store.t('Vollbild', 'Fullscreen')">
            &#x26F6;
          </button>
          <button @click="closeSplitView" class="split-btn" :title="store.t('Schließen', 'Close')">
            &#x2715;
          </button>
        </div>
      </div>
      <div class="split-content">
        <ExerciseContent :exercise="selectedExercise" />
      </div>
    </div>
  </div>

  <div v-else class="container" style="padding: 3rem 1.5rem; text-align: center">
    <p>{{ store.t('Thema nicht gefunden.', 'Subject not found.') }}</p>
    <RouterLink to="/">{{ store.t('Zurück zur Startseite', 'Back to home') }}</RouterLink>
  </div>
</template>

<style scoped>
.subject-page-wrapper {
  display: flex;
  min-height: calc(100vh - 60px);
}

.subject-page {
  flex: 1;
  padding-bottom: 4rem;
  transition: all 0.3s ease;
}

.subject-page.split-active {
  max-width: 50%;
}

.subject-hero {
  padding: 2rem 1.5rem 1.5rem;
  max-width: 850px;
  margin: 0 auto;
  border-bottom: 3px solid;
}

.back-link {
  font-size: 0.85rem;
  color: var(--text-muted);
  display: inline-block;
  margin-bottom: 0.75rem;
}

.back-link:hover {
  color: var(--primary-700);
}

.subject-hero h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.hero-desc {
  color: var(--text-secondary);
  font-size: 1rem;
}

.subject-actions {
  max-width: 850px;
  margin: 1.5rem auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.secondary-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.action-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--bg-alt);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s;
}

.action-card.exercises-card {
  flex-direction: column;
  align-items: stretch;
}

.exercises-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.exercises-list-wrapper {
  width: 100%;
}

.exercises-quick-list {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.5rem;
}

.exercise-quick-item {
  width: 100%;
  text-align: left;
  padding: 0.5rem 0.75rem;
  background: var(--bg, white);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-primary);
}

.exercise-quick-item:hover {
  border-color: var(--primary-400);
  background: var(--primary-50);
}

.exercise-quick-item.active {
  border-color: var(--primary-600);
  background: var(--primary-100);
  font-weight: 500;
}

.eq-title {
  display: block;
  margin-bottom: 0.25rem;
}

.eq-meta {
  display: flex;
  gap: 0.3rem;
}

.eq-tag {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 500;
  padding: 0.1rem 0.35rem;
  border-radius: 999px;
  letter-spacing: 0.02em;
}

.eq-tag-choice {
  background: var(--accent-100);
  color: var(--accent-500);
}

.eq-tag-freeform {
  background: var(--primary-100);
  color: var(--primary-700);
}

.eq-tag-source {
  background: var(--neutral-200);
  color: var(--neutral-700);
}

a.action-card:hover {
  border-color: var(--primary-300);
  background: var(--primary-100);
}

.action-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.action-card strong {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.15rem;
}

.action-count {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.video-list {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-top: 0.25rem;
}

.video-link {
  font-size: 0.8rem;
  color: var(--primary-700);
}

.video-link:hover {
  text-decoration: underline;
}

/* Split Panel Styles */
.split-panel {
  flex: 0 0 50%;
  max-width: 50%;
  border-left: 2px solid var(--border-light);
  background: var(--bg-primary);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 60px;
  height: calc(100vh - 60px);
  overflow: hidden;
}

.split-header {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-light);
  background: var(--bg-alt);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.split-controls {
  display: flex;
  gap: 0.5rem;
}

.split-btn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--border-light);
  background: var(--bg, white);
  border-radius: var(--radius-sm);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: all 0.2s;
  color: var(--text-secondary);
}

.split-btn:hover {
  border-color: var(--primary-400);
  background: var(--primary-50);
  color: var(--primary-700);
}

.split-content {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
}

@media (max-width: 1023px) {
  .subject-page-wrapper {
    display: block;
  }
  
  .subject-page.split-active {
    max-width: 100%;
  }
  
  .split-panel {
    display: none;
  }
}

@media (max-width: 768px) {
  .subject-hero {
    padding: 1.5rem 1rem 1rem;
  }
  .subject-hero h1 {
    font-size: 1.5rem;
  }
  .secondary-cards {
    grid-template-columns: 1fr;
  }
}
</style>

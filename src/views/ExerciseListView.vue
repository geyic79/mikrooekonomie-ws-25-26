<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { exercises } from '@/data/exercises'
import { subjects } from '@/data/subjects'
import { useAppStore } from '@/stores/app'
import type { Exercise } from '@/data/types'

const store = useAppStore()
const route = useRoute()

const filterSubject = ref((route.query.subject as string) || '')
const filterType = ref('')
const filterSource = ref('')

const filteredExercises = computed(() => {
  let result = exercises
  if (filterSubject.value) {
    result = result.filter(e => e.subjectId === filterSubject.value)
  }
  if (filterType.value) {
    result = result.filter(e => e.type === filterType.value)
  }
  if (filterSource.value) {
    result = result.filter(e => e.source === filterSource.value)
  }
  return result
})

const groupedExercises = computed(() => {
  const groups: Record<string, Exercise[]> = {}
  for (const ex of filteredExercises.value) {
    if (!groups[ex.subjectId]) {
      groups[ex.subjectId] = []
    }
    const subjectGroup = groups[ex.subjectId]
    if (subjectGroup) {
      subjectGroup.push(ex)
    }
  }
  return groups
})

function subjectTitle(id: string) {
  const s = subjects.find(s => s.id === id)
  if (!s) return id
  return store.language === 'de' ? s.titleDe : s.titleEn
}

function sourceLabel(source: string) {
  const labels: Record<string, [string, string]> = {
    'exercise-sheet': ['Übungsblatt', 'Exercise Sheet'],
    'demo-exam': ['Probeklausur', 'Demo Exam'],
    'exam-wise2425': ['Klausur WiSe 24/25', 'Exam WiSe 24/25'],
    'exam-sose25': ['Klausur SoSe 25', 'Exam SoSe 25'],
  }
  const l = labels[source]
  return l ? store.t(l[0], l[1]) : source
}
</script>

<template>
  <div class="exercise-list-page container">
    <header class="page-header">
      <h1>{{ store.t('Aufgaben', 'Exercises') }}</h1>
      <p class="subtitle">
        {{ store.t(
          `${filteredExercises.length} Aufgaben aus Übungsblättern und Klausuren`,
          `${filteredExercises.length} exercises from exercise sheets and exams`
        ) }}
      </p>
    </header>

    <div class="filters">
      <select v-model="filterSubject" class="filter-select">
        <option value="">{{ store.t('Alle Themen', 'All Subjects') }}</option>
        <option v-for="s in subjects" :key="s.id" :value="s.id">
          {{ store.language === 'de' ? s.titleDe : s.titleEn }}
        </option>
      </select>

      <select v-model="filterType" class="filter-select">
        <option value="">{{ store.t('Alle Typen', 'All Types') }}</option>
        <option value="freeform">{{ store.t('Freitext', 'Freeform') }}</option>
        <option value="choice">{{ store.t('Multiple Choice', 'Multiple Choice') }}</option>
      </select>

      <select v-model="filterSource" class="filter-select">
        <option value="">{{ store.t('Alle Quellen', 'All Sources') }}</option>
        <option value="exercise-sheet">{{ store.t('Übungsblätter', 'Exercise Sheets') }}</option>
        <option value="demo-exam">{{ store.t('Probeklausur', 'Demo Exam') }}</option>
        <option value="exam-wise2425">{{ store.t('Klausur WiSe 24/25', 'Exam WiSe 24/25') }}</option>
        <option value="exam-sose25">{{ store.t('Klausur SoSe 25', 'Exam SoSe 25') }}</option>
      </select>
    </div>

    <div v-for="(exs, subjectId) in groupedExercises" :key="subjectId" class="exercise-group">
      <h2 class="group-title">{{ subjectTitle(subjectId) }}</h2>
      <div class="exercise-cards">
        <RouterLink
          v-for="ex in exs"
          :key="ex.id"
          :to="`/exercise/${ex.id}`"
          class="exercise-card"
        >
          <div class="ex-title">{{ store.language === 'de' ? ex.titleDe : ex.titleEn }}</div>
          <div class="ex-tags">
            <span :class="['tag', ex.type === 'choice' ? 'tag-choice' : 'tag-freeform']">
              {{ ex.type === 'choice' ? 'MC' : store.t('Freitext', 'Freeform') }}
            </span>
            <span class="tag tag-source">{{ sourceLabel(ex.source) }}</span>
          </div>
        </RouterLink>
      </div>
    </div>

    <div v-if="filteredExercises.length === 0" class="empty-state">
      {{ store.t('Keine Aufgaben gefunden.', 'No exercises found.') }}
    </div>
  </div>
</template>

<style scoped>
.exercise-list-page {
  padding: 2rem 1.5rem;
}

.page-header {
  margin-bottom: 1.5rem;
}

.page-header h1 {
  font-size: 1.8rem;
  margin-bottom: 0.3rem;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-select {
  padding: 0.45rem 0.8rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  background: white;
  color: var(--text);
  cursor: pointer;
}

.filter-select:focus {
  outline: none;
  border-color: var(--primary-500);
}

.exercise-group {
  margin-bottom: 2rem;
}

.group-title {
  font-size: 1.15rem;
  color: var(--primary-800);
  margin-bottom: 0.75rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--border-light);
}

.exercise-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.6rem;
}

.exercise-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.85rem 1rem;
  background: white;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  text-decoration: none;
  color: inherit;
  transition: all 0.15s;
}

.exercise-card:hover {
  border-color: var(--primary-300);
  box-shadow: var(--shadow-sm);
}

.ex-title {
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.35;
}

.ex-tags {
  display: flex;
  gap: 0.35rem;
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .exercise-list-page {
    padding: 1.5rem 1rem;
  }
  .exercise-cards {
    grid-template-columns: 1fr;
  }
}
</style>

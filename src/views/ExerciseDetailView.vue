<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getExercise } from '@/data/exercises'
import { getSubject } from '@/data/subjects'
import { useAppStore } from '@/stores/app'
import { renderFormulas } from '@/utils/katex'

const route = useRoute()
const store = useAppStore()
const showSolution = ref(false)

const exercise = computed(() => getExercise(route.params.id as string))
const subject = computed(() => exercise.value ? getSubject(exercise.value.subjectId) : undefined)

const renderedBody = computed(() => {
  if (!exercise.value) return ''
  const raw = store.language === 'de' ? exercise.value.bodyDe : exercise.value.bodyEn
  return renderFormulas(raw)
})

const renderedSolution = computed(() => {
  if (!exercise.value) return ''
  const raw = store.language === 'de' ? exercise.value.solutionDe : exercise.value.solutionEn
  return raw ? renderFormulas(raw) : ''
})

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
  <div v-if="exercise" class="exercise-detail container-narrow">
    <div class="breadcrumbs">
      <RouterLink to="/exercises">{{ store.t('Aufgaben', 'Exercises') }}</RouterLink>
      <span class="sep">/</span>
      <span v-if="subject">
        <RouterLink :to="`/subject/${subject.id}`">
          {{ store.language === 'de' ? subject.titleDe : subject.titleEn }}
        </RouterLink>
        <span class="sep">/</span>
      </span>
    </div>

    <h1>{{ store.language === 'de' ? exercise.titleDe : exercise.titleEn }}</h1>

    <div class="meta-tags">
      <span :class="['tag', exercise.type === 'choice' ? 'tag-choice' : 'tag-freeform']">
        {{ exercise.type === 'choice' ? 'Multiple Choice' : store.t('Freitext', 'Freeform') }}
      </span>
      <span class="tag tag-source">{{ sourceLabel(exercise.source) }}</span>
    </div>

    <div class="exercise-body summary-content" v-html="renderedBody"></div>

    <div v-if="exercise.choicesDe && exercise.choicesDe.length" class="choices">
      <div
        v-for="(choice, i) in (store.language === 'de' ? exercise.choicesDe : exercise.choicesEn)"
        :key="i"
        :class="['choice-item', showSolution && exercise.correctChoiceIndex === i ? 'choice-correct' : '']"
      >
        <span :class="['choice-letter', showSolution && exercise.correctChoiceIndex === i ? 'choice-letter-correct' : '']">{{ String.fromCharCode(65 + i) }}</span>
        <span class="choice-text" v-html="renderFormulas(choice || '')"></span>
      </div>
    </div>

    <div v-if="renderedSolution" class="solution-section">
      <button class="btn btn-outline" @click="showSolution = !showSolution">
        {{ showSolution ? store.t('Lösung verbergen', 'Hide Solution') : store.t('Lösung anzeigen', 'Show Solution') }}
      </button>
      <div v-if="showSolution" class="solution-content summary-content" v-html="renderedSolution"></div>
    </div>
  </div>

  <div v-else class="container" style="padding: 3rem 1.5rem; text-align: center">
    <p>{{ store.t('Aufgabe nicht gefunden.', 'Exercise not found.') }}</p>
    <RouterLink to="/exercises">{{ store.t('Zurück zu Aufgaben', 'Back to exercises') }}</RouterLink>
  </div>
</template>

<style scoped>
.exercise-detail {
  padding: 2rem 1.5rem;
}

.breadcrumbs {
  font-size: 0.85rem;
  margin-bottom: 1rem;
  color: var(--text-muted);
}

.breadcrumbs a {
  color: var(--text-secondary);
}

.breadcrumbs a:hover {
  color: var(--primary-700);
}

.sep {
  margin: 0 0.4rem;
}

h1 {
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
}

.meta-tags {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.exercise-body {
  margin-bottom: 1.5rem;
}

.choices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.choice-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--bg-alt);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
}

.choice-letter {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-100);
  color: var(--primary-700);
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.85rem;
}

.choice-text {
  line-height: 1.5;
  padding-top: 0.15rem;
}

.choice-correct {
  background: #e8f5e9;
  border-color: #66bb6a;
}

.choice-letter-correct {
  background: #66bb6a;
  color: white;
}

.solution-section {
  border-top: 1px solid var(--border-light);
  padding-top: 1.5rem;
}

.solution-content {
  margin-top: 1rem;
  padding: 1rem;
  background: #f0faf0;
  border-radius: var(--radius-md);
  border: 1px solid #c8e6c8;
}
</style>

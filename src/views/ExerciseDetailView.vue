<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getExercise } from '@/data/exercises'
import { getSubject } from '@/data/subjects'
import { useAppStore } from '@/stores/app'
import ExerciseContent from '@/components/ExerciseContent.vue'

const route = useRoute()
const store = useAppStore()

const exercise = computed(() => getExercise(route.params.id as string))
const subject = computed(() => exercise.value ? getSubject(exercise.value.subjectId) : undefined)
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

    <ExerciseContent :exercise="exercise" />
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
</style>

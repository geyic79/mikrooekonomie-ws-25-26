<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getSubject } from '@/data/subjects'
import { getExercisesBySubject } from '@/data/exercises'
import { useAppStore } from '@/stores/app'
import { renderFormulas } from '@/utils/katex'

const route = useRoute()
const store = useAppStore()

const subject = computed(() => getSubject(route.params.id as string))
const exercises = computed(() => getExercisesBySubject(route.params.id as string))

const renderedSummary = computed(() => {
  if (!subject.value) return ''
  const raw = store.language === 'de' ? subject.value.summaryDe : subject.value.summaryEn
  return renderFormulas(raw)
})
</script>

<template>
  <div v-if="subject" class="subject-page">
    <div class="subject-hero" :style="{ borderColor: subject.color }">
      <RouterLink to="/" class="back-link">&#8592; {{ store.t('Alle Themen', 'All Subjects') }}</RouterLink>
      <h1>{{ store.language === 'de' ? subject.titleDe : subject.titleEn }}</h1>
      <p class="hero-desc">{{ store.language === 'de' ? subject.shortDescDe : subject.shortDescEn }}</p>
    </div>

    <div class="subject-actions">
      <div class="action-cards">
        <RouterLink :to="`/exercises?subject=${subject.id}`" class="action-card">
          <span class="action-icon">&#128221;</span>
          <div>
            <strong>{{ store.t('Aufgaben', 'Exercises') }}</strong>
            <span class="action-count">{{ exercises.length }} {{ store.t('verfügbar', 'available') }}</span>
          </div>
        </RouterLink>

        <div class="action-card" v-if="subject.videoLinks.length">
          <span class="action-icon">&#127909;</span>
          <div>
            <strong>{{ store.t('Videovorlesungen', 'Video Lectures') }}</strong>
            <div class="video-list">
              <a
                v-for="(v, i) in subject.videoLinks"
                :key="i"
                :href="v.url"
                target="_blank"
                rel="noopener"
                class="video-link"
              >{{ store.language === 'de' ? v.titleDe : v.titleEn }}</a>
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

  <div v-else class="container" style="padding: 3rem 1.5rem; text-align: center">
    <p>{{ store.t('Thema nicht gefunden.', 'Subject not found.') }}</p>
    <RouterLink to="/">{{ store.t('Zurück zur Startseite', 'Back to home') }}</RouterLink>
  </div>
</template>

<style scoped>
.subject-page {
  padding-bottom: 4rem;
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
}

.action-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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

@media (max-width: 768px) {
  .subject-hero {
    padding: 1.5rem 1rem 1rem;
  }
  .subject-hero h1 {
    font-size: 1.5rem;
  }
  .action-cards {
    grid-template-columns: 1fr;
  }
}
</style>

<script setup lang="ts">
import { subjects } from '@/data/subjects'
import { useAppStore } from '@/stores/app'
import { RouterLink } from 'vue-router'

const store = useAppStore()
</script>

<template>
  <div class="home">
    <header class="home-header">
      <h1>{{ store.t('Mikroökonomie WS 25/26', 'Microeconomics WS 25/26') }}</h1>
      <p class="subtitle">
        {{ store.t(
          'Zusammenfassungen, Aufgaben und Spickzettel für alle Vorlesungsthemen',
          'Summaries, exercises and cheat sheets for all lecture topics'
        ) }}
      </p>
    </header>

    <div class="subject-grid">
      <RouterLink v-for="subject in subjects" :key="subject.id" :to="`/subject/${subject.id}`" class="subject-card">
        <div class="card-icon" :style="{ background: subject.color }">
          {{ subject.icon }}
        </div>
        <div class="card-body">
          <h2>{{ store.language === 'de' ? subject.titleDe : subject.titleEn }}</h2>
          <p>{{ store.language === 'de' ? subject.shortDescDe : subject.shortDescEn }}</p>
        </div>
        <div class="card-arrow">&#8594;</div>
      </RouterLink>
    </div>

    <div class="home-cta">
      <RouterLink to="/exercises" class="btn btn-outline">
        {{ store.t('Alle Aufgaben anzeigen', 'View all exercises') }} &#8594;
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.home-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.home-header h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: var(--primary-800);
}

.subtitle {
  color: var(--text-secondary);
  font-size: 1.05rem;
}

.subject-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
}

.subject-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--bg, white);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  transition: all 0.2s;
  text-decoration: none;
  color: inherit;
}

.subject-card:hover {
  border-color: var(--primary-300);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.card-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}

.card-body {
  flex: 1;
  min-width: 0;
}

.card-body h2 {
  font-size: 1.05rem;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.card-body p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.card-arrow {
  color: var(--text-muted);
  font-size: 1.2rem;
  flex-shrink: 0;
}

.home-cta {
  text-align: center;
  margin-top: 2.5rem;
}

@media (max-width: 768px) {
  .home {
    padding: 1.5rem 1rem;
  }
  .home-header h1 {
    font-size: 1.8rem;
  }
  .subject-grid {
    grid-template-columns: 1fr;
  }
}
</style>

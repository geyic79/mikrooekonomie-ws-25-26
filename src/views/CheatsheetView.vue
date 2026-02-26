<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getSubject } from '@/data/subjects'
import { useAppStore } from '@/stores/app'
import { renderFormulas } from '@/utils/katex'

const route = useRoute()
const store = useAppStore()

const subject = computed(() => getSubject(route.params.subjectId as string))

const renderedCheatsheet = computed(() => {
  if (!subject.value) return ''
  const raw = store.language === 'de' ? subject.value.cheatsheetDe : subject.value.cheatsheetEn
  return renderFormulas(raw)
})
</script>

<template>
  <div v-if="subject" class="cheatsheet-page-wrapper">
    <div class="no-print toolbar">
      <RouterLink :to="`/subject/${subject.id}`" class="back-link">
        &#8592; {{ store.language === 'de' ? subject.titleDe : subject.titleEn }}
      </RouterLink>
      <button class="btn btn-primary" @click="() => window.print()">
        {{ store.t('Drucken / PDF', 'Print / PDF') }}
      </button>
    </div>

    <div class="cheatsheet-page summary-content" v-html="renderedCheatsheet"></div>
  </div>

  <div v-else class="container" style="padding: 3rem 1.5rem; text-align: center">
    <p>{{ store.t('Thema nicht gefunden.', 'Subject not found.') }}</p>
    <RouterLink to="/">{{ store.t('Zurück zur Startseite', 'Back to home') }}</RouterLink>
  </div>
</template>

<style scoped>
.cheatsheet-page-wrapper {
  padding: 1.5rem;
}

.toolbar {
  max-width: 210mm;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-link {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.back-link:hover {
  color: var(--primary-700);
}

.cheatsheet-page h2 {
  font-size: 1rem;
  margin: 0.8rem 0 0.4rem;
  padding-bottom: 0.2rem;
  border-bottom: 1.5px solid var(--primary-400);
  color: var(--primary-800);
}

.cheatsheet-page h3 {
  font-size: 0.85rem;
  margin: 0.6rem 0 0.3rem;
  color: var(--primary-700);
}

.cheatsheet-page p {
  margin: 0.25rem 0;
  font-size: 0.8rem;
}

.cheatsheet-page ul {
  margin: 0.2rem 0;
  padding-left: 1.2rem;
  font-size: 0.8rem;
}

.cheatsheet-page li {
  margin: 0.1rem 0;
}

.cheatsheet-page .formula-block {
  padding: 0.4rem 0.6rem;
  margin: 0.4rem 0;
  font-size: 0.78rem;
}

.cheatsheet-page table {
  font-size: 0.75rem;
}

.cheatsheet-page th, .cheatsheet-page td {
  padding: 0.3rem 0.5rem;
}
</style>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { RouterLink, useRoute } from 'vue-router'

const store = useAppStore()
const route = useRoute()
</script>

<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <RouterLink to="/" class="navbar-brand">
        <span class="brand-icon">M</span>
        <span class="brand-text">Mikroökonomie WS 25/26</span>
      </RouterLink>

      <div class="navbar-links">
        <RouterLink to="/" :class="{ active: route.name === 'home' }">
          {{ store.t('Themen', 'Subjects') }}
        </RouterLink>
        <RouterLink to="/exercises" :class="{ active: route.name === 'exercises' }">
          {{ store.t('Aufgaben', 'Exercises') }}
        </RouterLink>
      </div>

      <div class="navbar-controls">
        <div class="fontsize-toggle">
          <button @click="store.decreaseFontSize()" :disabled="store.fontSize <= 12"
            :title="store.t('Schriftgröße verkleinern', 'Decrease font size')" class="fontsize-btn">
            −
          </button>
          <span class="fontsize-display">{{ store.fontSize }}</span>
          <button @click="store.increaseFontSize()" :disabled="store.fontSize >= 20"
            :title="store.t('Schriftgröße vergrößern', 'Increase font size')" class="fontsize-btn">
            +
          </button>
        </div>
        <button class="lang-toggle" @click="store.toggleLanguage()"
          :title="store.t('Switch to English', 'Auf Deutsch wechseln')">
          {{ store.language === 'de' ? 'EN' : 'DE' }}
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-light);
  height: 64px;
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--neutral-900);
}

.brand-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: var(--primary-700);
  color: white;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 1.1rem;
  font-family: 'Source Serif 4', serif;
}

.brand-text {
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
}

.navbar-links {
  display: flex;
  gap: 0.25rem;
}

.navbar-links a {
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: all 0.2s;
}

.navbar-links a:hover {
  background: var(--neutral-100);
  color: var(--text);
}

.navbar-links a.active {
  background: var(--primary-100);
  color: var(--primary-700);
}

.navbar-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.fontsize-toggle {
  display: flex;
  align-items: center;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: white;
  overflow: hidden;
}

.fontsize-btn {
  padding: 0.35rem 0.6rem;
  border: none;
  background: transparent;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1;
}

.fontsize-btn:not(:disabled):hover {
  background: var(--primary-100);
  color: var(--primary-700);
}

.fontsize-btn:disabled {
  color: var(--neutral-400);
  cursor: not-allowed;
}

.fontsize-display {
  padding: 0.35rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text);
  border-left: 1px solid var(--border);
  border-right: 1px solid var(--border);
  background: var(--neutral-100);
  min-width: 2rem;
  text-align: center;
  line-height: 1;
}

.lang-toggle {
  padding: 0.35rem 0.7rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: white;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.04em;
}

.lang-toggle:hover {
  border-color: var(--primary-400);
  color: var(--primary-700);
  background: var(--primary-100);
}

@media (max-width: 768px) {
  .navbar-inner {
    padding: 0 1rem;
  }
  .brand-text {
    display: none;
  }
  .navbar-controls {
    gap: 0.5rem;
  }
}
</style>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

defineProps<{
  pdfUrl: string
  label: string
}>()

const emit = defineEmits<{
  close: []
}>()

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div class="pdf-modal-backdrop" @click.self="emit('close')">
      <div class="pdf-modal">
        <div class="pdf-modal-header">
          <span class="pdf-modal-title">{{ label }}</span>
          <div class="pdf-modal-actions">
            <a :href="pdfUrl" target="_blank" rel="noopener" class="pdf-modal-link" title="Open in new tab">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
            <button class="pdf-modal-close" @click="emit('close')" title="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
        <iframe :src="pdfUrl" class="pdf-modal-iframe" />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.pdf-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.pdf-modal {
  width: 100%;
  max-width: 900px;
  height: 90vh;
  background: var(--pdf-modal-bg, #ffffff);
  border-radius: var(--radius-md, 8px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.pdf-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--pdf-modal-border, #e0e0e0);
  background: var(--pdf-modal-header-bg, #f5f5f5);
  flex-shrink: 0;
}

.pdf-modal-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--pdf-modal-title-color, #333);
}

.pdf-modal-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pdf-modal-link {
  display: flex;
  align-items: center;
  padding: 0.35rem;
  border-radius: 4px;
  color: var(--pdf-modal-action-color, #555);
  transition: background 0.15s, color 0.15s;
}

.pdf-modal-link:hover {
  background: var(--pdf-modal-action-hover, rgba(0, 0, 0, 0.08));
  color: var(--pdf-modal-action-hover-color, #111);
}

.pdf-modal-close {
  display: flex;
  align-items: center;
  padding: 0.35rem;
  border: none;
  border-radius: 4px;
  background: none;
  color: var(--pdf-modal-action-color, #555);
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.pdf-modal-close:hover {
  background: var(--pdf-modal-action-hover, rgba(0, 0, 0, 0.08));
  color: var(--pdf-modal-action-hover-color, #111);
}

.pdf-modal-iframe {
  flex: 1;
  width: 100%;
  border: none;
}
</style>

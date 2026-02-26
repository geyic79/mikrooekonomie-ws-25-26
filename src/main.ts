import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Global event delegation for interactive widget buttons
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement

  // Fullscreen button: fullscreen the whole widget container
  const fsBtn = target.closest('.widget-fullscreen-btn')
  if (fsBtn) {
    const widget = fsBtn.closest('.interactive-widget')
    if (widget) {
      widget.requestFullscreen().catch(() => {
        const iframe = widget.querySelector('iframe')
        if (iframe) window.open(iframe.src, '_blank')
      })
    }
    return
  }

  // Exit fullscreen button
  const exitBtn = target.closest('.widget-exit-fullscreen-btn')
  if (exitBtn) {
    document.exitFullscreen().catch(() => {})
  }
})

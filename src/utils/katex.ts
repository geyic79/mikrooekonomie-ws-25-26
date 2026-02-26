import katex from 'katex'

export function renderFormulas(html: string): string {
  // Render block formulas $$...$$
  html = html.replace(/\$\$([\s\S]*?)\$\$/g, (_, tex) => {
    try {
      return katex.renderToString(tex.trim(), {
        displayMode: true,
        throwOnError: false,
        trust: true,
      })
    } catch {
      return `<span class="formula-error">${tex}</span>`
    }
  })

  // Render inline formulas $...$  (but not $$)
  html = html.replace(/\$([^\$\n]+?)\$/g, (_, tex) => {
    try {
      return katex.renderToString(tex.trim(), {
        displayMode: false,
        throwOnError: false,
        trust: true,
      })
    } catch {
      return `<span class="formula-error">${tex}</span>`
    }
  })

  return html
}

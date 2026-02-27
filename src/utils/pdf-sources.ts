import type { Exercise } from '@/data/types'

export interface PdfSources {
  exercisePdf: { url: string; label: string } | null
  solutionPdf: { url: string; label: string } | null
}

const base = import.meta.env.BASE_URL

const sheetFiles: Record<number, string> = {
  1: 'uebung-1-nachfrage',
  2: 'uebung-2-angebot',
  3: 'uebung-3-maerkte',
  4: 'uebung-4-spieltheorie',
  5: 'uebung-5-marktmacht',
  6: 'uebung-6-externalitaeten',
  7: 'uebung-7-asymmetrische-info',
}

const examFiles: Record<string, { sheet: string; solution: string | null }> = {
  'demo-exam': { sheet: 'probeklausur-typ-a', solution: null },
  'exam-wise2425': { sheet: 'klausur-wise-2024-25', solution: null },
  'exam-sose25': { sheet: 'klausur-sose-2025', solution: 'klausur-sose-2025-loesung' },
}

function getSheetNumber(exercise: Exercise): number | null {
  const match = exercise.id.match(/^es(\d+)-/)
  return match ? parseInt(match[1], 10) : null
}

export function getPdfSources(exercise: Exercise): PdfSources {
  if (exercise.source === 'exercise-sheet') {
    const num = getSheetNumber(exercise)
    const file = num ? sheetFiles[num] : null
    if (!file) return { exercisePdf: null, solutionPdf: null }
    return {
      exercisePdf: {
        url: `${base}pdfs/sheets/${file}.pdf`,
        label: exercise.sourceLabel,
      },
      solutionPdf: {
        url: `${base}pdfs/solutions/${file}-loesung.pdf`,
        label: `${exercise.sourceLabel} – Lösung`,
      },
    }
  }

  const exam = examFiles[exercise.source]
  if (!exam) return { exercisePdf: null, solutionPdf: null }
  return {
    exercisePdf: {
      url: `${base}pdfs/sheets/${exam.sheet}.pdf`,
      label: exercise.sourceLabel,
    },
    solutionPdf: exam.solution
      ? {
          url: `${base}pdfs/solutions/${exam.solution}.pdf`,
          label: `${exercise.sourceLabel} – Lösung`,
        }
      : null,
  }
}

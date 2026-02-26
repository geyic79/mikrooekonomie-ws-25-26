export interface Subject {
  id: string
  titleDe: string
  titleEn: string
  shortDescDe: string
  shortDescEn: string
  color: string
  icon: string
  videoLinks: VideoLink[]
  summaryDe: string
  summaryEn: string
  cheatsheetDe: string
  cheatsheetEn: string
}

export interface VideoLink {
  titleDe: string
  titleEn: string
  url: string
}

export interface Exercise {
  id: string
  subjectId: string
  titleDe: string
  titleEn: string
  source: 'exercise-sheet' | 'demo-exam' | 'exam-wise2425' | 'exam-sose25'
  sourceLabel: string
  type: 'freeform' | 'choice'
  bodyDe: string
  bodyEn: string
  choicesDe?: string[]
  choicesEn?: string[]
  solutionDe?: string
  solutionEn?: string
  correctChoiceIndex?: number
}

export type Language = 'de' | 'en'

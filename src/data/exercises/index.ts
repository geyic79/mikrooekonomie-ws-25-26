import type { Exercise } from '@/data/types'
import { exerciseSheetExercises } from './exercise-sheets'
import { examExercises } from './exams'

export const exercises: Exercise[] = [
  ...exerciseSheetExercises,
  ...examExercises,
]

export function getExercise(id: string): Exercise | undefined {
  return exercises.find(e => e.id === id)
}

export function getExercisesBySubject(subjectId: string): Exercise[] {
  return exercises.filter(e => e.subjectId === subjectId)
}

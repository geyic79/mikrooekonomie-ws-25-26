import type { Subject } from '@/data/types'
import { nachfrage } from './nachfrage'
import { angebot } from './angebot'
import { maerkte } from './maerkte'
import { spieltheorie } from './spieltheorie'
import { marktmacht } from './marktmacht'
import { externalitaeten } from './externalitaeten'
import { asymmetrischeInfo } from './asymmetrische-info'
import { verhaltensoekonomie } from './verhaltensoekonomie'

export const subjects: Subject[] = [
  nachfrage,
  angebot,
  maerkte,
  spieltheorie,
  marktmacht,
  externalitaeten,
  asymmetrischeInfo,
  verhaltensoekonomie,
]

export function getSubject(id: string): Subject | undefined {
  return subjects.find(s => s.id === id)
}

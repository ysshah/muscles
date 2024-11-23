import { compareAsc, differenceInDays, format, parseISO } from 'date-fns'

export type Muscle = {
  muscle: string
  last: string
}

export function compare(m1: Muscle, m2: Muscle): number {
  return compareAsc(parseISO(m1.last), parseISO(m2.last)) || m1.muscle.localeCompare(m2.muscle)
}

export function daysSince(date: string): number {
  return differenceInDays(new Date(), parseISO(date))
}

export const today = format(new Date(), 'yyyy-MM-dd')

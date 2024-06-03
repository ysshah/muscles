import { compareAsc, format, formatDistanceToNowStrict, toDate } from 'date-fns'

export interface Muscle {
  muscle: string
  last: string
}

export function compare(m1: Muscle, m2: Muscle) {
  return compareAsc(toDate(m1.last), toDate(m2.last)) || m1.muscle.localeCompare(m2.muscle)
}

export function daysSince(date: string) {
  return formatDistanceToNowStrict(toDate(date), {
    unit: 'day',
    roundingMethod: 'floor',
  }).split(' ')[0]
}

export const today = format(new Date(), 'yyyy-MM-dd')

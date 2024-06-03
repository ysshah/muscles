import Table from '@/components/table'
import { Muscle } from '@/lib/util'
import { kv } from '@vercel/kv'
import { unstable_noStore } from 'next/cache'

export default async function Home() {
  unstable_noStore()
  const records = await kv.hgetall<Record<string, string>>('muscles')
  const muscles: Muscle[] = Object.entries(records!).map(([muscle, last]) => ({ muscle, last }))
  return <Table initialMuscles={muscles} />
}

import { kv } from '@vercel/kv'
import Table from './table'

export default async function Home() {

  const records = await kv.hgetall<Record<string, string>>('activities')
  const muscles = Object.entries(records!).map(([muscle, last]) => ({muscle, last}))

  return <Table musclesProp={muscles} />
}

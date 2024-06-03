'use server'

import { kv } from '@vercel/kv'

export async function update(muscle: string, last: string) {
  await kv.hset('muscles', { [muscle]: last })
}

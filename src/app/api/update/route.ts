import { kv } from '@vercel/kv'
import { format } from 'date-fns'
import { NextResponse } from 'next/server'

export async function POST() {
  const today = format(new Date(), 'yyyy-MM-dd')
  console.log('Reached update route');
  await new Promise(r => setTimeout(r, 2000))
  // kv.hset('activities', { [muscle]: today })
  return NextResponse.json({})
}

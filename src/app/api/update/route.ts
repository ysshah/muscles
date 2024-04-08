import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'

export async function POST() {
  console.log('Reached update route');
  await new Promise(r => setTimeout(r, 60000))
  // kv.hset('activities', { [muscle]: today })
  return NextResponse.json({})
}

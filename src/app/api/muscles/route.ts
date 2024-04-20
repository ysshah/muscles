import { kv } from '@vercel/kv'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  console.log('Getting muscles')
  const records = await kv.hgetall<Record<string, string>>('muscles')
  const muscles = Object.entries(records!).map(([muscle, last]) => ({ muscle, last }))
  return NextResponse.json(muscles)
}

export async function POST(request: NextRequest) {
  const { muscle, last } = await request.json()
  await kv.hset('muscles', { [muscle]: last })
  return NextResponse.json({})
}

import { getSearch } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest, res: NextResponse) {
  const { searchParams } = req.nextUrl
  const q = searchParams.get('q') || ''
  let results = []
  try {
    const res = await getSearch(q)
    results = res.list
  } catch (e: any) {
    console.log(e)
  }
  return new NextResponse(JSON.stringify(results), {
    headers: {
      'content-type': 'application/json',
      'cache-control': 's-maxage=60, stale-while-revalidate',
    },
  })
}

import dailyMatching from '@/data/dailyMatching.json';

export async function GET() {
  return Response.json(dailyMatching);
} 
import recentMatches from '@/data/recentMatches.json';

export async function GET() {
  return Response.json(recentMatches);
} 
import ageDistribution from '@/data/ageDistribution.json';

export async function GET() {
  return Response.json(ageDistribution);
} 
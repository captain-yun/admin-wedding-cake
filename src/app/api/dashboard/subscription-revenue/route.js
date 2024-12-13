import subscriptionRevenue from '@/data/subscriptionRevenue.json';

export async function GET() {
  return Response.json(subscriptionRevenue);
} 
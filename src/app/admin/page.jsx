import dynamic from 'next/dynamic';

const StatCard = dynamic(() => import('@/components/dashboard/StatCard'), {
  ssr: false
});

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">대시보드</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="총 회원수" value="1,234" trend="+12%" />
        <StatCard title="이번달 매칭" value="89" trend="+5%" />
        <StatCard title="신규 가입" value="56" trend="+8%" />
        <StatCard title="활성 구독" value="789" trend="+3%" />
      </div>
    </div>
  );
} 
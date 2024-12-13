"use client";

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      type: "매칭",
      description: "새로운 매칭이 성사되었습니다.",
      time: "5분 전",
    },
    {
      id: 2,
      type: "가입",
      description: "새로운 회원이 가입했습니다.",
      time: "10분 전",
    },
    {
      id: 3,
      type: "결제",
      description: "프리미엄 구독이 결제되었습니다.",
      time: "15분 전",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">최근 활동</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between border-b pb-4 last:border-0"
          >
            <div>
              <span className="text-sm font-medium text-gray-500">
                {activity.type}
              </span>
              <p className="text-gray-900">{activity.description}</p>
            </div>
            <span className="text-sm text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;

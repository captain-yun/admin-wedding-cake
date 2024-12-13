"use client";

export default function AdminHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">Wedding Cake Admin</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <span className="material-icons-outlined">notifications</span>
          </button>
          <div className="flex items-center space-x-2">
            <img
              src="/admin-avatar.png"
              alt="Admin"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium">관리자</span>
          </div>
        </div>
      </div>
    </header>
  );
} 
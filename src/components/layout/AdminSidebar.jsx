"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "", label: "대시보드", icon: "dashboard" },
  { href: "/members", label: "회원 관리", icon: "people" },
  { href: "/matching", label: "매칭 관리", icon: "favorite" },
  { href: "/contents", label: "컨텐츠 관리", icon: "article" },
  { href: "/payments", label: "결제 관리", icon: "payment" },
  { href: "/statistics", label: "통계", icon: "analytics" },
  { href: "/support", label: "고객 지원", icon: "support" },
  { href: "/settings", label: "설정", icon: "settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg">
      <nav className="mt-8">
        {menuItems.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              pathname === href ? "bg-gray-100 border-l-4 border-blue-500" : ""
            }`}
          >
            <span className="material-icons-outlined mr-3">{icon}</span>
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
} 
'use client';

import { Button } from "@/components/ui/button";
import { Home, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav>
        <ul className="space-y-2">
          <li><Link href="/dashboard" className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded"><Home /> Dashboard</Link></li>
          <li><Link href="/settings" className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded"><Settings /> Settings</Link></li>
        </ul>
      </nav>
      <Button variant="outline" className="mt-10 w-full flex items-center gap-2"><LogOut /> Logout</Button>
    </aside>
  );
}

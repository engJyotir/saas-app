'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { BarChart, Users, DollarSign, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <Sidebar />
      
      <div className="flex flex-col w-full">
        {/* Top Navigation Bar */}
        <Navbar title="Dashboard" />

        {/* Main Content */}
        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Users"
            value="1,234"
            icon={<Users className="h-8 w-8 text-blue-500" />}
          />
          <DashboardCard
            title="Revenue"
            value="$45,678"
            icon={<DollarSign className="h-8 w-8 text-green-500" />}
          />
          <DashboardCard
            title="Orders"
            value="789"
            icon={<ShoppingCart className="h-8 w-8 text-yellow-500" />}
          />
          <DashboardCard
            title="Analytics"
            value="23K Views"
            icon={<BarChart className="h-8 w-8 text-purple-500" />}
          />
        </main>
      </div>
    </div>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card className="shadow-lg rounded-lg">
      <CardHeader className="flex items-center gap-4">
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}

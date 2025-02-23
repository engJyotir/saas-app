'use client';

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar({ title }) {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">{title}</h1>
      <Button variant="outline"><Menu className="h-6 w-6" /></Button>
    </header>
  );
}

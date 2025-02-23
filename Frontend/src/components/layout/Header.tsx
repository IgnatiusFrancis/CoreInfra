// src/components/layout/Header.tsx
import { BellIcon, UserCircleIcon } from 'lucide-react';

export default function Header() {
  return (
    <div className="h-16 border-b bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button className="text-gray-600">←</button>
        <nav className="flex items-center gap-2">
          <span className="text-gray-400">Card Request</span>
          <span className="text-gray-400">/</span>
          <span>Request Details</span>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-600">
          <BellIcon className="w-5 h-5" />
        </button>
        <button className="text-gray-600">
          <UserCircleIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
// src/components/layout/Sidebar.tsx
import { ActivityIcon, ArchiveIcon, BuildingIcon, ClipboardIcon, CreditCardIcon, FileQuestionIcon, FileTextIcon, ListIcon, LogOutIcon, UserCircleIcon, UserIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface MenuItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

const MenuItem = ({ icon, label, href, isActive }: MenuItemProps) => (
  <Link 
    href={href}
    className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
      isActive 
        ? 'bg-blue-50 text-blue-600' 
        : 'text-gray-600 hover:bg-gray-50'
    }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default function Sidebar() {
  return (
    <div className="w-64 h-screen flex flex-col border-r bg-white">
      {/* Logo */}
      <div className="p-4 border-b">
        <Image
          src="/logo.png"
          alt="Lapo Logo"
          width={120}
          height={40}
          className="w-auto h-8"
        />
      </div>

      {/* Navigation */}
      <div className="flex-1 flex flex-col p-4">
        <div className="space-y-1">
          <MenuItem 
            icon={<HomeIcon />} 
            label="Dashboard" 
            href="/dashboard" 
          />
        </div>

        <div className="mt-4">
          <p className="px-4 text-xs font-medium text-gray-400 uppercase">
            MAIN MENU
          </p>
          <div className="mt-2 space-y-1">
            <MenuItem 
              icon={<BuildingIcon />} 
              label="Branches" 
              href="/branches" 
            />
            <MenuItem 
              icon={<UsersIcon />} 
              label="Roles" 
              href="/roles" 
            />
            <MenuItem 
              icon={<UserIcon />} 
              label="Users" 
              href="/users" 
            />
            <MenuItem 
              icon={<CreditCardIcon />} 
              label="Card Scheme" 
              href="/card-scheme" 
            />
            <MenuItem 
              icon={<FileTextIcon />} 
              label="Card Profile" 
              href="/card-profile" 
            />
            <MenuItem 
              icon={<ClipboardIcon />} 
              label="Card Request" 
              href="/card-request"
              isActive
            />
            <MenuItem 
              icon={<ArchiveIcon />} 
              label="Stock" 
              href="/stock" 
            />
            <MenuItem 
              icon={<CreditCardIcon />} 
              label="Cards" 
              href="/cards" 
            />
            <MenuItem 
              icon={<ListIcon />} 
              label="Authorization List" 
              href="/authorization-list" 
            />
            <MenuItem 
              icon={<FileQuestionIcon />} 
              label="Authorization Queue" 
              href="/authorization-queue" 
            />
            <MenuItem 
              icon={<ActivityIcon />} 
              label="Trail" 
              href="/trail" 
            />
            <MenuItem 
              icon={<UserCircleIcon />} 
              label="Account" 
              href="/account" 
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <MenuItem 
          icon={<LogOutIcon />} 
          label="Logout" 
          href="/logout" 
        />
        <div className="mt-4 px-4">
          <p className="text-xs text-gray-400">POWERED BY</p>
          <Image
            src="/cardinfra-logo.png"
            alt="Cardinfra Logo"
            width={100}
            height={30}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
}

// Icons component with all required icons
const HomeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

// Add other icon components here...
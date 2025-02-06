import Image from "next/image";
import ProfileCard from "./profile";
import { useState } from "react";
import React from "react";

import { MoreVertical } from "lucide-react";
import { ChevronFirst } from "lucide-react";


interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
}

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
    
    const [activeItem, setActiveItem] = useState<string>("");

  const modifiedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement<SidebarItemProps>(child)) {
      return React.cloneElement(child, {
        active: child.props.text === activeItem,
        onClick: () => setActiveItem(child.props.text),
      });
    }
    return child;
  });

  return (
    <aside className="w-[280px] h-screen">
      <nav className="h-full flex flex-col bg-white">
        <div className="p-4 pl-5 pb-2 flex justify-between items-center">
          <div className="min-w-[200px] min-h-[40px] relative">
            <Image
              src="/full_logo.png"
              alt="Full Logo"
              width={220}
              height={40}
              priority
              className="object-contain"
            />
          </div>
        </div>

        <ul className="flex-1 px-3">{modifiedChildren}</ul>

        <div className="flex items-center pl-6">
          <Image
            src="/logout.png"
            alt="Logout"
            width={60}
            height={60}
            className="cursor-pointer"
          />
          <h2 className="text-lg ml-1 font-medium text-[#A51818]">Logout</h2>
        </div>

        <ProfileCard />
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, onClick }: SidebarItemProps) {
  const modifiedIcon =
    React.isValidElement(icon) && icon.type === Image && active
      ? React.cloneElement(icon as React.ReactElement<any, typeof Image>, {
          src: (icon as any).props.src.replace(".png", "_active.png"),
        })
      : icon;

  return (
    <li
      onClick={onClick}
      aria-selected={active ? "true" : "false"}
      className={`relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            transition-colors border-2 ${
              active
                ? "bg-gradient-to-tr from-[#F3F4FC] to-[#F3F4FC] border-[#DADCEE] text-[#262626]"
                : "hover:bg-gray-100 text-[#808080] border-transparent"
            }`}
    >
      {modifiedIcon}
      <span className="w-52 ml-3">{text}</span>
    </li>
  );
}

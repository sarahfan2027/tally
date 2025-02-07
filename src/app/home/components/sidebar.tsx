import Image from "next/image";
import ProfileCard from "./profile";
import { useState } from "react";
import React from "react";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  expanded?: boolean;
  onClick?: () => void;
}

interface SidebarProps {
  children: React.ReactNode;
  onExpandChange: (expanded: boolean) => void;
}

export default function Sidebar({ children, onExpandChange }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const [activeItem, setActiveItem] = useState<string>("Materials");

  const toggleExpanded = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onExpandChange(newExpanded);
  };

  const modifiedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement<SidebarItemProps>(child)) {
      return React.cloneElement(child, {
        expanded: expanded,
        active: child.props.text === activeItem,
        onClick: () => setActiveItem(child.props.text),
      });
    }
    return child;
  });

  return (
    <aside
      onClick={toggleExpanded}
      className={`h-screen ${
        expanded ? "w-[280px]" : "w-[77px]"
      } transition-width duration-300 fixed cursor-pointer`}
    >
      <nav className="h-full flex flex-col bg-white">
        <div className="p-4 pl-5 pb-1 flex justify-between items-center">
          <div
            className={`${
              expanded ? "min-w-[200px]" : "min-w-[40px]"
            } min-h-[40px] relative transition-all`}
          >
            <Image
              src={expanded ? "/full_logo.png" : "/logo.png"}
              alt="Logo"
              width={expanded ? 220 : 50}
              height={50}
              priority
              className="object-contain"
            />
          </div>
        </div>

        <ul className="flex-1 px-3">{modifiedChildren}</ul>

        <div
          className={`flex items-center px-3 ${
            expanded ? "" : "justify-center"
          }`}
        >
          <Image
            src="/logout.png"
            alt="Logout"
            width={60}
            height={60}
            className="cursor-pointer"
          />
          {expanded && (
            <h2 className="text-lg ml-1 font-medium text-[#A51818]">Logout</h2>
          )}
        </div>

        <ProfileCard expanded={expanded} />
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  expanded = true,
  onClick,
}: SidebarItemProps) {
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
      {expanded && <span className="w-52 ml-3">{text}</span>}
    </li>
  );
}

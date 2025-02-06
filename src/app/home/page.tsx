"use client";

import Sidebar, { SidebarItem } from "./components/sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem
          icon={
            <Image
              src="/materials.png"
              alt="Materials"
              width={30}
              height={30}
            />
          }
          text="Materials"
        />

        <SidebarItem
          icon={
            <Image src="/products.png" alt="Products" width={30} height={30} />
          }
          text="Products"
        />

        <SidebarItem
          icon={
            <Image
              src="/fulfillment.png"
              alt="Fulfillment"
              width={30}
              height={30}
            />
          }
          text="Fulfillment"
        />

        <div className="my-2 border-t border-gray-300" />

        <SidebarItem
          icon={
            <Image
              src="/integrations.png"
              alt="Integrations"
              width={30}
              height={30}
            />
          }
          text="Integrations"
        />
      </Sidebar>
      <main className="w-5/6 bg-gray-100 h-screen border-l border-gray-300" />
    </div>
  );
}

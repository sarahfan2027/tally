"use client";

import Sidebar, { SidebarItem } from "./components/sidebar";
import Image from "next/image";
import { useState } from "react";
import ProductItem from "./components/item";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"inventory" | "order-queue">(
    "inventory"
  );

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

      <main className="w-full bg-gray-100 h-screen border-l border-gray-300 p-6 pr-32">
        <div className="flex justify-between items-center ml-32 pt-3 mb-4">
          <h1 className="flex text-2xl">
            Materials<span className="text-[#AAAAAA]">&nbsp;/&nbsp;Blanks</span>
          </h1>
          <div className="flex gap-1 bg-[#E6E6E6] rounded-lg p-1.5">
            <button
              onClick={() => setActiveTab("inventory")}
              className={`px-6 py-2 font-medium rounded-md ${
                activeTab === "inventory"
                  ? "bg-white text-black shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                  : "bg-[#E6E6E6] text-[#666666]"
              }`}
            >
              Inventory
            </button>
            <button
              onClick={() => setActiveTab("order-queue")}
              className={`px-2 py-2 font-medium rounded-md ${
                activeTab === "order-queue"
                  ? "bg-white text-black shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                  : "bg-[#E6E6E6] text-[#666666]"
              }`}
            >
              Order Queue
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-between bg-white rounded-lg shadow-md p-6 min-h-[300px] ml-32">
          <div className="absolute flex items-center w-[430px]">
            <div className="relative flex-1 pr-2">
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search Materials"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Image src="/Frame.png" alt="Search" width={30} height={30} />
            <Image src="/sort.png" alt="Filter" width={30} height={30} />
          </div>
          <button className="bg-[#444EAA] text-white font-medium px-4 py-2 rounded-lg mr-6 fixed right-32 flex items-center gap-2">
            <Image src="/add.png" alt="Add New" width={12} height={12} />
            Add New
          </button>

          <div className="flex flex-col w-full">
            <div className="mt-16 space-y-4 w-full">
              <ProductItem 
                name="Gildan T-Shirt - Red"
                size="M"
                imageUrl="/redshirt.png"
                backgroundColor="white"
              />
            </div>

            <div className="mt-4 space-y-4 w-full">
              <ProductItem 
                name="Gildan T-Shirt - Red"
                size="M"
                imageUrl="/redshirt.png"
                backgroundColor="white"
              />
            </div>

            <div className="mt-4 space-y-4 w-full">
              <ProductItem 
                name="Gildan T-Shirt - Red"
                size="L"
                imageUrl="/redshirt.png"
                backgroundColor="white"
              />
            </div>

            <div className="mt-4 space-y-4 w-full">
              <ProductItem 
                name="Gildan T-Shirt - Black"
                size="M"
                imageUrl="/blackshirt.png"
                backgroundColor="white"
              />
            </div>

            <div className="mt-4 space-y-4 w-full">
              <ProductItem 
                name="Gildan T-Shirt - Black"
                size="L"
                imageUrl="/blackshirt.png"
                backgroundColor="white"
              />
            </div>

            <div className="mt-4 space-y-4 w-full">
              <ProductItem 
                name="Gildan T-Shirt - White"
                size="S"
                imageUrl="/whiteshirt.png"
                backgroundColor="#333333"
              />
            </div>

            <div className="mt-4 space-y-4 w-full">
              <ProductItem 
                name="Gildan T-Shirt - White"
                size="M"
                imageUrl="/whiteshirt.png"
                backgroundColor="#333333"
              />
            </div>

            <div className="mt-4 space-y-4 w-full">
              <ProductItem 
                name="Gildan T-Shirt - White"
                size="L"
                imageUrl="/whiteshirt.png"
                backgroundColor="#333333"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

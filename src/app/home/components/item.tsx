import Image from "next/image";
import React, { useState } from "react";
import localFont from "next/font/local";

const uncutSans = localFont({
  src: "../../../../public/UncutSansRegular.otf",
});

interface ProductItemProps {
  name: string;
  size: string;
  imageUrl: string;
  backgroundColor?: string;
  inventoryStock?: "high" | "low";
}

const ProductItem = ({
  name,
  size,
  imageUrl,
  backgroundColor = "white",
  inventoryStock = "high",
}: ProductItemProps) => {
  const [quantity, setQuantity] = useState(13);

  return (
    <div className="flex items-center justify-between pt-3">
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-12 h-12 p-2 object-cover border border-[#D4D4D4] border-2 rounded"
          style={{ backgroundColor }}
        />
        <div>
          <h3 className={uncutSans.className}>
            {name} / {size}
          </h3>
        </div>
      </div>
      <div className="flex items-center border border-[#D4D4D4] rounded">
        {/* making the quantity decrease */}
        <button
          onClick={() => setQuantity(Math.max(0, quantity - 1))}
          className={`px-4 py-1 rounded-l bg-white hover:bg-gray-50 ${uncutSans.className}`}
        >
          <Image src="/minus.png" alt="Minus" width={16} height={16} />
        </button>

        {/* display */}
        <div
          className={`flex flex-col items-center border ${
            inventoryStock === "high"
              ? "border-[#C19A4D] bg-[#F5EFE1]"
              : "border-[#D4D4D4] bg-[#FFFFFF]"
          } ${uncutSans.className}`}
        >
          <span className="py-1 text-[18px] font-medium">{quantity}</span>
          <div
            className={`px-10 text-[10px] w-full ${
              inventoryStock === "high" 
                ? "bg-[#C19A4D] text-white" 
                : "bg-[#F2F2F2] text-[#808080] border-[#D4D4D4]"
            }`}
          >
            24 PCS
          </div>
        </div>


        {/* making the quantity increase */}
        <button
          onClick={() => setQuantity(quantity + 1)}
          className={`px-4 py-1 rounded-r bg-white hover:bg-gray-50 ${uncutSans.className}`}
        >
          <Image src="/plus.png" alt="Plus" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;

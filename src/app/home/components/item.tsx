import Image from "next/image";
import React, { useState } from "react";
import localFont from "next/font/local";

const uncutSans = localFont({
  src: "../../../../public/UncutSansRegular.otf"
});

interface ProductItemProps {
  name: string;
  size: string;
  imageUrl: string;
  backgroundColor?: string;
}

const ProductItem = ({ name, size, imageUrl, backgroundColor = "white" }: ProductItemProps) => {
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
        <button
          onClick={() => setQuantity(Math.max(0, quantity - 1))}
          className={`px-4 py-1 rounded-l bg-white hover:bg-gray-50 ${uncutSans.className}`}
        >
          <Image src="/minus.png" alt="Minus" width={16} height={16} />
        </button>
        <div
          className={`flex flex-col items-center border border-[#C19A4D] bg-[#F5EFE1] ${uncutSans.className}`}
        >
          <span className="py-1  text-[18px] font-medium">{quantity}</span>
          <div className="px-10 text-[8px] text-white w-full bg-[#C19A4D]">24 PCS</div>
        </div>
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

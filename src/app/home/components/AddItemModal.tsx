import React, { useState } from "react";

interface AddItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (item: {
    name: string;
    size: string;
    imageUrl: string;
    backgroundColor: string;
    inventoryStock: "high" | "low";
  }) => void;
}

const AddItemModal = ({ isOpen, onClose, onSubmit }: AddItemModalProps) => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("S"); 
  const [imageUrl, setImageUrl] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [inventoryStock, setInventoryStock] = useState<"high" | "low">("high");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      size,
      imageUrl,
      backgroundColor,
      inventoryStock
    });
    onClose();
    setName("");
    setSize("S");
    setImageUrl("");
    setBackgroundColor("");
    setInventoryStock("high");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[500px]">
        <h2 className="text-xl font-bold mb-4">Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Item Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
            </select>
            <input
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Background Color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <select
              value={inventoryStock}
              onChange={(e) => setInventoryStock(e.target.value as "high" | "low")}
              className="w-full p-2 border rounded"
            >
              <option value="high">High Stock</option>
              <option value="low">Low Stock</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#444EAA] text-white rounded"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;

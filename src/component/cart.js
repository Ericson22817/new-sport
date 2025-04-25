"use client";

import { X, ShoppingCart } from "lucide-react";
import { useState } from "react";

const CartDrawer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Cart Icon */}
      <div onClick={() => setOpen(true)} className="cursor-pointer relative">
        <ShoppingCart size={22} className="hover:text-red-500" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          0
        </span>
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <X className="cursor-pointer" onClick={() => setOpen(false)} />
        </div>

        <div className="p-4">
          <p className="text-center text-gray-500">No items found.</p>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

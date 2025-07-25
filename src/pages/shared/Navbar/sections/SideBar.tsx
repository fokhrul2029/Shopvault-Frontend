import React, { useEffect, useState } from "react";
import { getCart } from "../../../../utilities/cartUtils";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Empty from "../components/Empty";
import useProduct from "../../../../hooks/useProduct";
import { IoClose } from "react-icons/io5";

interface SideBarProps {
  isCartOpen: boolean;
  setIsCartOpen: (value: boolean) => void;
}

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
}

const SideBar: React.FC<SideBarProps> = ({ isCartOpen, setIsCartOpen }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { isActive } = useProduct();

  useEffect(() => {
    const items: CartItem[] = getCart();
    setCartItems(items);

    // Calculate total price
    const total = items.reduce(
      (sum: number, item: CartItem) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [isActive]);

  return (
    <>
      {isCartOpen && (
        <div className="fixed inset-0 bg-[#00000085] z-50 transition-opacity duration-300">
          {/* Clicking outside closes the sidebar */}
          <div
            className="absolute inset-0"
            onClick={() => setIsCartOpen(false)}
          ></div>

          {/* The actual sidebar content */}
          <div className="absolute right-0 top-0 h-full w-[350px] bg-white shadow-lg z-50 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Cart</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-red-500 font-semibold hover:text-red-700 cursor-pointer"
                >
                  <IoClose />
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <Empty />
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item: any, i) => (
                    <Card key={i} item={item} />
                  ))}
                </div>
              )}
            </div>

            {/* Footer with Total and Checkout */}
            {cartItems.length > 0 && <Footer total={totalPrice} />}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;

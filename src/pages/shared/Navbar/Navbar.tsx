import { useEffect, useState } from "react";
import { FaUserSecret } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router";
import SideBar from "./sections/SideBar";
import { getCart } from "../../../utilities/cartUtils";
import useProduct from "../../../hooks/useProduct";

interface CartItem {
  quantity: number;
}

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const { isActive } = useProduct();

  useEffect(() => {
    const items: CartItem[] = getCart();

    const totalQuantity = items.reduce(
      (sum: number, item: CartItem) => sum + item.quantity,
      0
    );
    setTotalQuantity(totalQuantity);
  }, [isActive]);

  return (
    <div className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 tracking-tight"
        >
          Shop<span className="text-blue-600">vault</span>
        </Link>

        <ul className="flex gap-3 items-center">
          <li
            onClick={() => setIsCartOpen(true)}
            className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-200 px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-50 relative"
          >
            <span className="absolute -top-[10px] -right-1 bg-[#423c9c8a] text-gray-700 rounded-full px-[5px] text-xs ">
              {totalQuantity}
            </span>
            <MdShoppingCart />
          </li>
          <li className="text-gray-700  font-medium cursor-not-allowed px-3 py-1 rounded-lg bg-blue-50 flex items-center gap-1">
            <FaUserSecret /> <span>Anonymous</span>
          </li>
        </ul>
      </div>
      <SideBar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </div>
  );
};

export default Navbar;

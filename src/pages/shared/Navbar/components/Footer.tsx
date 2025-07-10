import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { clearCart } from "../../../../utilities/cartUtils";
import useProduct from "../../../../hooks/useProduct";
import { useState } from "react";
import CheckoutModal from "../sections/CheckoutModal";

interface FooterProps {
  total: number;
}

const Footer: React.FC<FooterProps> = ({ total }) => {
  const { toggleActive } = useProduct();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleOrderSubmit = (orderData: {
    name: string;
    email: string;
    address: string;
  }) => {
    console.log("Order submitted:", orderData);
    clearCart();
    setShowCheckout(false);
    toggleActive();
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 border border-gray-200 rounded bg-white shadow space-x-4">
        <span className="text-lg font-semibold text-gray-800">Total:</span>
        <p className="text-2xl font-bold text-blue-600 flex items-center">
          <FaBangladeshiTakaSign />
          <span>{total}</span>
        </p>
        <button
          onClick={handleCheckout}
          className="ml-auto bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Checkout
        </button>
      </div>

      {showCheckout && (
        <CheckoutModal
          onClose={() => setShowCheckout(false)}
          onSubmit={handleOrderSubmit}
        />
      )}
    </>
  );
};

export default Footer;

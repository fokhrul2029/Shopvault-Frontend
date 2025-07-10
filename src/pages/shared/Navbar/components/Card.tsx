import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../../../utilities/cartUtils";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useProduct from "../../../../hooks/useProduct";

interface CardProps {
  item: Item;
}

interface Item {
  id: string;
  quantity?: number;
  price?: number;
  title?: string;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const { id, quantity, price, title } = item;
  const { toggleActive } = useProduct();

  const removeItem = (id: string) => {
    removeFromCart(id);
    toggleActive();
  };

  const handleIncrease = (id: string) => {
    increaseQuantity(id);
    toggleActive();
  };
  const handleDecrease = (id: string) => {
    decreaseQuantity(id);
    toggleActive();
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <button
          onClick={() => removeItem(id)}
          className="text-red-500 text-sm cursor-pointer hover:text-red-700"
        >
          Remove
        </button>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-blue-600 font-semibold flex items-center">
          <FaBangladeshiTakaSign />
          <span>{price}</span>
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleDecrease(id)}
            className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 flex items-center justify-center"
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{quantity}</span>
          <button
            onClick={() => handleIncrease(id)}
            className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

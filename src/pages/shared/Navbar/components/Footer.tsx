import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 border border-gray-200 rounded bg-white shadow space-x-4">
      <span className="text-lg font-semibold text-gray-800">Total:</span>
      <p className="text-2xl font-bold text-blue-600 flex items-center">
        <FaBangladeshiTakaSign />
        <span>199</span>
      </p>
      <button className="ml-auto bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
        Checkout
      </button>
    </div>
  );
};

export default Footer;

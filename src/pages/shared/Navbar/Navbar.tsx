import { Link } from "react-router";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 tracking-tight"
        >
          Shop<span className="text-blue-600">vault</span>
        </Link>

        <ul className="flex gap-6 items-center">
          <li className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50">
            Cart
          </li>
          <li className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-blue-50">
            User
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

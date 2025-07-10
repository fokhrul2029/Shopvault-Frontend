import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router";

interface ProductType {
  _id: string;
  title: string;
  price: number;
  images: any;
}

interface ProductCardProps {
  product: ProductType;
  onAddToCart?: (_id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { _id, title, price, images } = product;

  return (
    <Link
      to={`/product/${_id}`}
      className="group bg-white shadow-md rounded-lg overflow-hidden transition-transform max-w-[200px] flex flex-col justify-between"
    >
      <div>
        <div className="h-24 overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-[1.1]"
          />
        </div>
        <div className="p-2">
          <h2 className="text-xs font-semibold mb-1">{title}</h2>
          <p className="text-gray-700 text-sm mb-3 flex items-center">
            <FaBangladeshiTakaSign />
            <span>{price}</span>
          </p>
        </div>
      </div>
      <div className="p-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            onAddToCart?.(_id);
          }}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition cursor-pointer z-[99999] text-xs "
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Pending from "../../components/Pending";
import Error from "../../components/Error";
import InfoLine from "./components/InfoLine";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { isPending, isError, data } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      return res.data.data;
    },
  });

  if (isPending) return <Pending />;
  if (isError) return <Error />;

  const {
    title,
    description,
    category,
    price,
    discount,
    quantity,
    salesCount,
    featured,
    images,
  } = data;

  const finalPrice = discount
    ? (price - price * (discount / 100)).toFixed(2)
    : price.toFixed(2);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
      <div>
        <img
          src={images?.[0]}
          alt={title}
          className="w-full h-80 object-cover rounded-lg shadow"
        />
        {featured && (
          <span className="inline-block mt-4 bg-yellow-400 text-white text-xs px-3 py-1 rounded-full">
            Featured Product
          </span>
        )}
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
        <InfoLine label="Category" value={category} />
        <p className="text-gray-700 mb-4">{description}</p>

        <div className="mb-4">
          <p className="text-xl font-bold text-indigo-600 flex items-center">
            <FaBangladeshiTakaSign />
            <span>{finalPrice}</span>
            {discount > 0 && (
              <span className="text-sm text-gray-500 line-through ml-2 flex items-center">
                <FaBangladeshiTakaSign />
                <span>{price.toFixed(2)}</span>
              </span>
            )}
          </p>
          {discount > 0 && (
            <p className="text-sm text-green-600 font-medium">
              You save {discount}%!
            </p>
          )}
        </div>

        <InfoLine label="Available" value={quantity} />
        <InfoLine label="Sold" value={salesCount} />

        <button
          onClick={() => console.log("Add to cart:", id)}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;

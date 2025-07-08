import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import Pending from "../../../components/Pending";
import { addToCart } from "../../../utilities/cartUtils";

const Product: React.FC = () => {
  const axiosPublic = useAxiosPublic();

  const { isPending, data } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data.data;
    },
  });

  const handleProduct = (id: string) => {
    const result = addToCart(`${id}`);
    console.log(result.message);
  };

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-6">
        All Products
      </h1>
      {isPending ? (
        <Pending />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6">
          {Array.isArray(data) &&
            data?.map((product: any) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={(id) => handleProduct(id)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Product;

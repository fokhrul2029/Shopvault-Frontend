import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import Pending from "../../../components/Pending";

const Product: React.FC = () => {
  const axiosPublic = useAxiosPublic();

  const { isPending, data } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data.data;
    },
  });

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
                onAddToCart={(id) => console.log("Added product:", id)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Product;

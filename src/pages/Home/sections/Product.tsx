import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";

const Product: React.FC = () => {
  const axiosPublic = useAxiosPublic();

  const { isPending, data } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data.data;
    },
  });

  if (isPending) return <h1 className="text-center p-6">Loading...</h1>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {Array.isArray(data) &&
        data?.map((product: any) => (
          <ProductCard
            key={product._id}
            product={product}
            onAddToCart={(id) => console.log("Added product:", id)}
          />
        ))}
    </div>
  );
};

export default Product;

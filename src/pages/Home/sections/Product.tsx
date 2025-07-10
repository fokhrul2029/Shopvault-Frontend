import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import Pending from "../../../components/Pending";
import { addToCart } from "../../../utilities/cartUtils";
import useProduct from "../../../hooks/useProduct";
import Swal from "sweetalert2";

const Product: React.FC = () => {
  const axiosPublic = useAxiosPublic();
  const { toggleActive } = useProduct();

  const { isPending, data } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data.data;
    },
  });

  const handleProduct = (id: string, price: number, title: string) => {
    const result = addToCart(id, price, title);
    toggleActive();
    if (result.success) {
      Swal.fire({
        title: result.message,
        icon: "success",
      });
    } else {
      Swal.fire({
        title: result.message,
        icon: "info",
      });
    }
  };

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-6">
        All Products
      </h1>
      {isPending ? (
        <Pending />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-6">
          {Array.isArray(data) &&
            data?.map((product: any) => (
              <ProductCard
                key={product._id}
                product={product}
                onAddToCart={(id) =>
                  handleProduct(id, product.price, product.title)
                }
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Product;

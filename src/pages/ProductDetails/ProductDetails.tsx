import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { isPending, data } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      return res.data.data;
    },
  });

  if (isPending) return <h1>Pending</h1>;

  console.log(data);

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};

export default ProductDetails;

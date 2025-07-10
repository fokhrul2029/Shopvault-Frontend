import { useContext } from "react";
import { ProductContext } from "../contextApi/ProductProvider";

function useProduct() {
  const context = useContext(ProductContext);
  const isActive = context?.isActive ?? false;
  const toggleActive = context?.toggleActive ?? (() => {});
  return { isActive, toggleActive };
}

export default useProduct;

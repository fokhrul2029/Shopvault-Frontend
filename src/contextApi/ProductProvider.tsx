import React, {
  createContext,
  useState,
  type ReactNode,
  useCallback,
} from "react";

interface ProductContextType {
  isActive: boolean;
  toggleActive: () => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);

interface ProductProviderProps {
  children: ReactNode;
}

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  return (
    <ProductContext.Provider value={{ isActive, toggleActive }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

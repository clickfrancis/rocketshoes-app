import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../resources/interfaces/Product";

interface CartContextType {
  cart: Product[];
  addProduct: (product: Product | undefined) => Promise<void>;
  removeProduct: (product: Product | undefined) => Promise<void>;
  checkout: () => Promise<void>;
  countCart: number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [countCart, setCountCart] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    let countProduct: number = 0;

    cart.forEach((element) => {
      const amount = element.amount ?? 0;
      countProduct = countProduct + amount;
    });

    setCountCart(countProduct);
  }, [cart]);

  const addProduct = async (product: Product | undefined) => {
    const updatedCart = [...cart];

    if (product) {
      const data = updatedCart.find((element) => element.id === product?.id);
      if (data) {
        data.amount++;
      } else {
        updatedCart.push({ ...product, amount: 1 });
      }
    }

    setCart(updatedCart);
  };

  const removeProduct = async (product: Product | undefined) => {
    const updatedCart = [...cart];

    if (product) {
      const index = updatedCart.findIndex(
        (element) => element.id === product.id
      );

      if (index !== -1) {
        const data = updatedCart[index];

        if (data.amount === 1) {
          updatedCart.splice(index, 1);
        } else {
          data.amount--;
        }
      }
    }

    setCart(updatedCart);
  };

  const checkout = async () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, countCart, addProduct, removeProduct, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

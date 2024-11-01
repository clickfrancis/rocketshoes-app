import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Cart from "./index";
import * as CartHook from "../../hooks/useCart";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { CartProvider } from "../../hooks/useCart";

const mockCheckout = vi.fn();
const mockAddProduct = vi.fn();
const mockRemoveProduct = vi.fn();

export interface CartContextType {
  cart: Array<{
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
  }>;
  addProduct: (product: number) => void;
  removeProduct: (product: number) => void;
  checkout: () => void;
}

const mockUseCart = () => ({
  cart: [
    {
      id: 1,
      title: "Tênis VR Caminhada Confortável",
      price: 453.86,
      image: "https://example.com/image1.webp",
      amount: 1,
    },
  ],
  addProduct: mockAddProduct,
  removeProduct: mockRemoveProduct,
  checkout: mockCheckout,
});

const mockUseProducts = () => ({
  products: [
    {
      id: 1,
      title: "Tênis VR Caminhada Confortável",
      price: 453.86,
      image: "https://example.com/image1.webp",
    },
    {
      id: 2,
      title: "Outro Produto",
      price: 200.0,
      image: "https://example.com/image2.webp",
    },
  ],
});

vi.mock("../../hooks/useCart", async (importOriginal) => {
  const actual: typeof CartHook = await importOriginal();
  return {
    ...actual,
    useCart: () => mockUseCart(),
  };
});

vi.mock("../../hooks/useProducts", () => ({
  useProduts: () => mockUseProducts(),
}));

describe("Cart Component test", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders Cart component and displays products", () => {
    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Routes>
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </CartProvider>
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Tênis VR Caminhada Confortável")
    ).toBeInTheDocument();

    expect(screen.getByText("Total R$ 453.86")).toBeInTheDocument();
  });

  test("calls checkout function on button click", () => {
    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Routes>
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </CartProvider>
        </ThemeProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Finalizar Pedido"));
    expect(mockCheckout).toHaveBeenCalled();
  });
});

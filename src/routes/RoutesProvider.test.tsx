import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, test, expect, vitest } from "vitest";
import Home from "../pages/Home";
import { CartProvider } from "../hooks/useCart";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Cart from "../pages/Cart";

vitest.mock("../../components/ProducList", () => () => <div>Product List</div>);

describe("RoutesProvider test", () => {
  test("renders Home page and ProductList component on the root path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </CartProvider>
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/carregando produtos/i)).toBeInTheDocument();
  });

  test("renders Cart page at /cart path", () => {
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

    expect(screen.getByText(/Finalizar pedido/i)).toBeInTheDocument();
  });
});

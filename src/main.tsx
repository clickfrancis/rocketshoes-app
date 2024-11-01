import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import theme from "./theme.ts";
import { ThemeProvider } from "styled-components";
import RoutesProvider from "./routes/RoutesProvider.tsx";
import { CartProvider } from "./hooks/useCart.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CartProvider>
        <RoutesProvider />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
);

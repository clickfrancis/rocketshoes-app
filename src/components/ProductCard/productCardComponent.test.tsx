import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ProductCardComponent from "./index";

describe("Switch of test ProductCard", () => {
  const onClickMock = vi.fn();
  const label = "Adicionar ao Carrinho";
  const idMock = 11;
  const imageMock = "sourceImage";
  const priceMock = 1.0;
  const titleMock = "title";
  let title: HTMLElement;
  let image: HTMLImageElement;
  let price: HTMLElement;
  let button: HTMLButtonElement;
  let elements: HTMLElement[];

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <ProductCardComponent
          id={idMock}
          title={titleMock}
          image={imageMock}
          price={priceMock}
          button={onClickMock}
        />
      </ThemeProvider>
    );

    title = screen.getByText(titleMock);
    image = screen.getByAltText(titleMock) as HTMLImageElement;
    price = screen.getByText(priceMock);
    button = screen.getByText(label) as HTMLButtonElement;
    elements = [title, image, price, button];
  });

  test("checks if all necessary elements are rendered", () => {
    elements.forEach((element) => {
      expect(element).toBeInTheDocument;
    });
  });

  test("check if the button is clickable", () => {
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

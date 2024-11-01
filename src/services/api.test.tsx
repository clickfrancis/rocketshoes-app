import { vi, describe, test, expect } from "vitest";
import { fetchData } from "./api";
import axios from "axios";

vi.mock("axios");

describe("API Service test", () => {
  test("should fetch data successfully call GET and return data", async () => {
    const mockProducts = [{ id: 1, name: "Product 1" }];

    (axios.get as typeof axios.get) = vi
      .fn()
      .mockResolvedValueOnce({ data: mockProducts });

    const response = await fetchData();

    expect(response).toEqual(mockProducts);
    expect(axios.get).toHaveBeenCalledWith("/products");
  });
});

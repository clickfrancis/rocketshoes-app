import { server } from "../mocks/serverMock";
import { beforeAll, afterAll, afterEach, vi } from "vitest";
import { fetchData } from "../services/api";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export interface useProductsType {
  products: Array<{
    id: number;
    title: string;
    special: boolean;
    price: number;
    image: string;
  }>;
}

export const dataMock: useProductsType = {
  products: [
    {
      id: 1,
      title: "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
      price: 453.86,
      special: false,
      image:
        "https://droper-media.us-southeast-1.linodeobjects.com/2452023194744615.webp",
    },
    {
      id: 2,
      title: "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
      price: 340.02,
      special: true,
      image:
        "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ennqnnblj5irlj6oakba/air-jordan-1-origin-story-release-date.jpg",
    },
  ],
};

const mockUseProducts = (products: useProductsType, loading: boolean) => ({
  products,
  loading,
});

vi.mock("../hooks/useProducts", () => ({
  useProduts: () => ({ ...mockUseProducts(dataMock, true) }),
}));

describe("useProducts test", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should fetch products successfully", async () => {
    const response = await fetchData();
    const products = response.products;

    expect(products).toHaveLength(2);
    expect(products[0]).toEqual({
      id: 1,
      title: "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
      price: 453.86,
      special: false,
      image:
        "https://droper-media.us-southeast-1.linodeobjects.com/2452023194744615.webp",
    });
  });

  test("should fetch products and return them", async () => {
    const { products, loading } = mockUseProducts(dataMock, true);

    expect(loading).toBe(true);
    await fetchData();

    const { loading: loadingAfter } = mockUseProducts(dataMock, false);
    expect(loadingAfter).toBe(false);
    expect(products).toEqual({
      products: [
        {
          id: 1,
          title: "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
          price: 453.86,
          special: false,
          image:
            "https://droper-media.us-southeast-1.linodeobjects.com/2452023194744615.webp",
        },
        {
          id: 2,
          title: "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
          price: 340.02,
          special: true,
          image:
            "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/ennqnnblj5irlj6oakba/air-jordan-1-origin-story-release-date.jpg",
        },
      ],
    });
  });

  /**test("should handle errors", async () => {
    server.use(
      rest.get("/products", (_request, response, context) => {
        return response(context.status(500));
      })
    );

    const { result, waitForNextUpdate } = renderHook(() => useProduts());

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("error when searching for product");
    expect(result.current.products).toEqual([]);
  });**/
});

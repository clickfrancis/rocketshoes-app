import { rest } from "msw";

const products = [
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
];

export const handlers = [
  rest.get("/products", (_request, response, context) => {
    return response(context.json({ products }));
  }),

  rest.get("/products/:id", (request, response, context) => {
    const { id } = request.params;
    const productId = Number(id);
    const product = products.find((product) => product.id === productId);

    if (product) {
      return response(context.json(product));
    } else {
      return response(
        context.status(404),
        context.json({ message: "product not found" })
      );
    }
  }),
];

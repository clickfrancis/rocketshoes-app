import { useCart } from "../../hooks/useCart";
import { useProduts } from "../../hooks/useProducts";
import ProductCardComponent from "../ProductCard";
import { Container } from "./style";

export const ProductList = () => {
  const { products, loading, error } = useProduts();
  const { addProduct } = useCart();

  if (loading) return <p>carregando produtos</p>;
  if (error) return <p>Erro: {error}</p>;

  console.log(products);

  const handleAddCart = async (productId: number) => {
    const product = products.find((data) => data.id == productId);
    await addProduct(product);
  };

  return (
    <Container>
      {products.map((product) => (
        <ProductCardComponent
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          button={() => handleAddCart(product.id)}
        />
      ))}
    </Container>
  );
};

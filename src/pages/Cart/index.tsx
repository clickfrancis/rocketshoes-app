import { Box, Button } from "@mui/material";
import HeaderComponent from "../../components/Header";
import { ProductCartCompoment } from "../../components/ProductCart";
import { Container, FinishCart } from "./style";
import { useCart } from "../../hooks/useCart";
import { useProduts } from "../../hooks/useProducts";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, addProduct, removeProduct, checkout } = useCart();
  const { products } = useProduts();

  const data = [...cart];

  const navigate = useNavigate();

  const handleAddCart = async (productId: number) => {
    const product = products.find((data) => data.id == productId);
    await addProduct(product);
  };

  const handleremoveCart = async (productId: number) => {
    const product = products.find((data) => data.id == productId);
    await removeProduct(product);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      return total + product.price * (product.amount || 1);
    }, 0);
  };

  const total = calculateTotal();

  const handleCheckout = async () => {
    await checkout();
  };

  return (
    <>
      <HeaderComponent />
      <Box sx={{ padding: "0 10% 0 10%", borderRadius: "5px" }}>
        <Container>
          {data.map((products) => (
            <ProductCartCompoment
              key={products.id}
              id={products.id}
              image={products.image}
              price={products.price}
              title={products.title}
              amout={products.amount}
              total={products.amount * products.price}
              buttonAdd={() => {
                handleAddCart(products.id);
              }}
              buttonRemove={() => {
                handleremoveCart(products.id);
              }}
            />
          ))}
          <FinishCart>
            <Button
              onClick={() => {
                handleCheckout();
                navigate("/");
              }}
              variant="contained"
            >
              Finalizar Pedido
            </Button>
            <strong> Total R$ {total.toFixed(2)}</strong>
          </FinishCart>
        </Container>
      </Box>
    </>
  );
};

export default Cart;

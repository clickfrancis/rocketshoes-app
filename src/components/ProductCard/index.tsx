import { Button } from "@mui/material";
import { Card } from "./styles";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  button: () => void;
}

const ProductCardComponent: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  button,
}) => {
  return (
    <Card key={id}>
      <img src={image} alt={title} />
      <strong>{title}</strong>
      <strong>R$ {price}</strong>
      <Button variant="contained" onClick={button}>
        Adicionar ao Carrinho
      </Button>
    </Card>
  );
};

export default ProductCardComponent;

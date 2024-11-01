import {
  AmountProduct,
  Container,
  GroupAmount,
  GroupProduct,
  InfoProduct,
  InputAmount,
} from "./style";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ProductCartProps {
  id: number;
  title: string;
  price: number;
  image: string;
  amout: number;
  total: number;
  buttonAdd: () => void;
  buttonRemove: () => void;
}

export const ProductCartCompoment: React.FC<ProductCartProps> = ({
  id,
  title,
  price,
  image,
  amout,
  total,
  buttonAdd,
  buttonRemove,
}) => {
  return (
    <Container key={id}>
      <GroupProduct>
        <img src={image} alt={title} />
        <InfoProduct>
          <span>{title}</span>
          <strong>R$ {price}</strong>
        </InfoProduct>
      </GroupProduct>
      <GroupAmount>
        <AmountProduct>
          <Fab size="medium" color="primary" aria-label="add" role="add">
            <AddIcon onClick={buttonAdd} />
          </Fab>
          <InputAmount id="outlined-basic" variant="outlined" value={amout} />
          <Fab size="medium" color="primary" aria-label="remove">
            <RemoveIcon onClick={buttonRemove} />
          </Fab>
        </AmountProduct>
        <div>R$ {total}</div>
      </GroupAmount>
    </Container>
  );
};

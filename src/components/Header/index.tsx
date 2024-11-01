import { Cart, Container } from "./styles";
import { MdShoppingBasket } from "react-icons/md";
import logo from "../../assets/Logo.svg";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

const HeaderComponent: React.FC = () => {
  const { countCart } = useCart();

  return (
    <Container className="" data-theme="dark">
      <Link to={"/"}>
        <img src={logo} alt="rocketshoes" />
      </Link>

      <Link to="/cart">
        <Cart>
          <div>
            <strong>Meu carrinho</strong>
            <span>{countCart}</span>
            <MdShoppingBasket color="#ffffff" />
          </div>
        </Cart>
      </Link>
    </Container>
  );
};

export default HeaderComponent;

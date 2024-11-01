import HeaderComponent from "../../components/Header";
import { ProductList } from "../../components/ProducList";
import { Container } from "./style";

const Home = () => {
  return (
    <>
      <HeaderComponent />
      <Container>
        <ProductList />
      </Container>
    </>
  );
};

export default Home;

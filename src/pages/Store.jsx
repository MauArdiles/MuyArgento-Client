import { Header } from "../components/header/Header";
import { Banner } from "../components/banner/Banner";
import { Footer } from "../components/footer/Footer";
import { ProductCard } from "../components/products/ProductCard";
import data from "../data/data.json";
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
import { Row, Col } from "react-bootstrap";
import { VscEmptyWindow } from "react-icons/vsc";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
/*-----------------------------------------------------------------*/
export const Store = () => {
  const products = data.Products;
  /*-----------------------------------------------------------------*/
  if (products.length === 0) {
    return (
      <>
        <VscEmptyWindow className="w-48 h-48" />
        <Alert variant="danger" dismissible>
          <Alert.Heading>Por el momento no hay productos</Alert.Heading>
          <p>En este momento no hay productos cargados para comprar.</p>
        </Alert>
      </>
    );
  }
  /*-----------------------------------------------------------------*/
  return (
    <>
      <Header />
      <Banner />
      <Container style={{ margin: "10px" }}>
        <h1 style={{ textAlign: "center", fontSize: "32px" }} className="p-3">
          Bienvenidos a Tienda Muy Argento
        </h1>
        <Row xs={1} md={3} className="g-1">
          {products.map((productItem, idx) => (
            <Col key={idx} style={{ alignContent: "center" }}>
              <ProductCard product={productItem} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

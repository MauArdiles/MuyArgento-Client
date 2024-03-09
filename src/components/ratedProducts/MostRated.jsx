import data from "../../data/data.json";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FavProdCard } from "./FavProdCard";

/*---------------------------------------------------------------*/
export const MostRated = () => {
  const favProd = data.FavProd;

  return (
    <div style={{ display: " flex", flexFlow: "row", overflow: "hidden" }}>
      <Container style={{ margin: "10px" }}>
        <Row xs={1} md={3} className="g-1">
          {favProd.map((prod, idx) => (
            <Col key={idx} style={{ alignContent: "center" }}>
              <FavProdCard product={prod} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

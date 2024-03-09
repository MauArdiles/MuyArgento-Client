/* eslint-disable react/prop-types */

import { useCart } from "../../hooks/useCart";
/*-----------------------------------------------------------------*/
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const FavProdCard = ({ product }) => {
  const cart = useCart();
  const handleClick = () => {
    return cart.addToCart(product);
  };

  return (
    <Card
      style={{
        width: "18rem",
        height: "40em",
        alignItems: "center",
        margin: "1em",
      }}
      border="primary"
    >
      {product.Image && (
        <img src={product.Image} alt={product.Name} width={500} height={500} />
      )}
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{product.Name}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text style={{ textAlign: "center" }}>
          {product.Description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text style={{ textAlign: "center" }}>
          U$D {product.Price}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button
          variant="primary"
          className="text-center"
          style={{ marginBottom: "2px" }}
          onClick={handleClick}
        >
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

/* eslint-disable react/prop-types */
import { useCart } from "../../hooks/useCart";
/*-----------------------------------------------------------------*/
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
/*-----------------------------------------------------------------*/

export const CartProduct = (props) => {
  const product = props.product;
  const { addToCart, deleteFromCart } = useCart();
  /*-----------------------------------------------------------------*/
  return (
    <Card
      border="primary"
      style={{
        width: "60rem",
        margin: "10px",
        display: "flex",
        flexFlow: "row",
        alignItems: "center",
      }}
    >
      <Card.Body
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Card.Img
          src={product.newProduct.Image}
          alt={product.newProduct.Name}
          style={{ width: "10rem", height: "10rem" }}
        />
        <Card.Title>{product.newProduct.Name}</Card.Title>
        <Card.Text>{product.newProduct.Description}</Card.Text>
      </Card.Body>
      <Card.Body
        style={{
          width: "auto",
          marginRight: "10px",
          border: "0.5px solid gray",
          borderRadius: "20px",
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
        }}
      >
        <Button
          sm="0.5"
          variant="outline-primary"
          onClick={() => addToCart(product)}
        >
          Agregar
        </Button>
        <Card.Text style={{ margin: "1em" }}>
          Cantidad: {product.quantity}
        </Card.Text>
        <Button
          sm="0.5"
          variant="outline-danger"
          onClick={() => deleteFromCart(product.newProduct.id)}
        >
          Eliminar
        </Button>
      </Card.Body>
      <Card.Text>
        U$D {(product.newProduct.Price * product.quantity).toFixed(2)}
      </Card.Text>
    </Card>
  );
};

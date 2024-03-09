import { useCart } from "../../hooks/useCart";
import { CartProduct } from "../cart/CartProduct";
import Card from "react-bootstrap/Card";
import { PaypalButton } from "./PaypalButton";
import { v4 as uuidv4 } from "uuid";
/*-----------------------------------------------------------------*/
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
/*-----------------------------------------------------------------*/

export const Cart = () => {
  const { cart, getTotalCost, clearCart } = useCart();
  /*-----------------------------------------------------------------*/
  const handleClearCart = () => {
    clearCart();
  };
  /*-----------------------------------------------------------------*/

  const productsCount = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const totalCost = getTotalCost().toFixed(2);
  const cartId = uuidv4();
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {cart.map((prodItem, idx) => (
          <Row xs={1} md={3} key={idx} className="g-4 m-2">
            <CartProduct product={prodItem} />
          </Row>
        ))}
      </div>
      <Card
        border="primary"
        style={{
          width: "auto",
          height: "18rem",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "10px",
        }}
      >
        <Card.Body>
          <Card.Title>Detalle de la Compra </Card.Title>
          <Card.Text>Productos {productsCount}</Card.Text>
          <Card.Subtitle>Total de la Compra: U$D {totalCost}</Card.Subtitle>
        </Card.Body>
        <Card.Body>
          <Card.Text>Finalizar Compra</Card.Text>

          <PaypalButton cost={totalCost} cart={cart} id={cartId} />

          <Button variant="danger" onClick={handleClearCart}>
            Limpiar Carrito
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

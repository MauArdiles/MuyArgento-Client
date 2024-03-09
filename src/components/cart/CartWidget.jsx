import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
/*-----------------------------------------------------------------*/
import Button from "react-bootstrap/Button";

export const CartWidget = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const productsCount = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Button variant="primary" size="sm" onClick={() => navigate("/cartPage")}>
        Carrito: {productsCount}
      </Button>
    </>
  );
};

// import {useProduct} from '../../hooks/useProduct'
import { VscEmptyWindow } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
// import toast from "react-hot-toast";
import data from "../../data/data.json";

export const Products = () => {
  const products = data.Products;
  const navigate = useNavigate();

  //   const handleDelete = (id) => {
  //     toast((t) => (
  //       <div>
  //         <p> Seguro que quieres eliminar el producto?</p>
  //         <div className="d-grid gap-2">
  //           <Button
  //             variant="primary"
  //             size="sm"
  //             onClick={() => {
  //               deleteProducts(id);
  //               toast.dismiss(t.id);
  //             }}
  //           >
  //             Eliminar
  //           </Button>
  //           <Button
  //             variant="secondary"
  //             size="sm"
  //             onClick={() => toast.dismiss(t.id)}
  //           >
  //             Cancelar
  //           </Button>
  //         </div>
  //       </div>
  //     ));
  //   };

  //   const handleDone = async (id) => {
  //     await addFavProduct(id);
  //   };

  if (products.length === 0) {
    return (
      <>
        <VscEmptyWindow className="w-48 h-48" />
        <Alert variant="danger" dismissible>
          <Alert.Heading>
            Por el momento no hay productos para mostrar
          </Alert.Heading>
        </Alert>
      </>
    );
  }

  return (
    <div className="py-2">
      <Row xs={1} md={2} className="gap-3 drop-shadow-lg">
        {products.map((prod, idx) => (
          <Card key={idx} style={{ width: "18rem" }}>
            {prod.product_image && <img src={prod.Image} alt={prod.Name} />}
            <Card.Body>
              <>
                <Card.Title>{prod.Name}</Card.Title>
                <Card.Text>{prod.Description}</Card.Text>
                <Card.Text>U$D {prod.Price}</Card.Text>
              </>
            </Card.Body>
            <Card.Body
              style={{ display: "flex", flex: "row-nowrap", gap: "2px" }}
            >
              <Button
                variant="primary"
                className="text-center"
                size="sm"
                onClick={() => navigate(`/products/${prod.id}`)}
              >
                Actualizar
              </Button>
              <Button
                variant="danger"
                className="text-center"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  //   handleDelete(prod.id);
                }}
              >
                Eliminar
              </Button>
              <Button
                varian="succes"
                className="text-center"
                size="sm"
                // onClick={() => handleDone(prod._id)}
              >
                {/* {prod.favProduct === false
                  ? "Agregar a Destacados"
                  : "Retirar de Destacados"} */}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
};

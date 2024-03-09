// import { CommentForm } from "../components/comments/CommentForm";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Clientpdf } from "../components/Comprobante/Clientpdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Button from "react-bootstrap/Button";
import { useCart } from "../hooks/useCart";

export const PaymmentSuccess = () => {
  const { cart } = useCart();
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return (
    <Container fluid style={{ marginLeft: "35em", marginTop: "5em" }}>
      <Card
        style={{
          width: "40%",
          height: "40%",
        }}
      >
        <Alert
          variant="success"
          style={{
            width: "100%",
            alignContent: "center",
            background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
            textAlign: "center",
            color: "rgba(255, 255, 255",
          }}
        >
          Pago Procesado Correctamente
        </Alert>
        {/* <CommentForm /> */}
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            Tienda Online Muy Argento
          </Card.Title>
          <Card.Text>
            Fecha del Pago: {day}/{month}/{year}
          </Card.Text>
          <Card.Text>
            Hora: {hour}:{minute}
          </Card.Text>
          <PDFDownloadLink
            document={<Clientpdf carrito={cart} />}
            fileName={`PagoMuyArgento-${Date()}.pdf`}
          >
            {({ loading }) =>
              loading ? (
                <Button variant="info">Cargando Comprobante...</Button>
              ) : (
                <Button
                  variant="info"
                  style={{
                    marginLeft: "16em",
                    marginBottom: "2em",
                    marginTop: "3em",
                  }}
                >
                  Descargar Comprobante
                </Button>
              )
            }
          </PDFDownloadLink>
          <Card.Footer
            style={{
              alignContent: "center",
              background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
              textAlign: "center",
              color: "rgba(255, 255, 255",
            }}
          >
            Gracias por su compra
          </Card.Footer>
        </Card.Body>
      </Card>
    </Container>
  );
};

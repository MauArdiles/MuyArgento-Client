import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/Logo Negra.jpeg";
import DHL from "../../assets/DHL.png";
import Fedex from "../../assets/Fedex.png";
import mastercard from "../../assets/Master.png";
import paypal from "../../assets/Paypal.png";
import visa from "../../assets/Visa.png";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/Instagram.png";

export const NewFooter = () => {
  return (
    <>
      <Navbar as="div" style={{ backgroundColor: "#3CB4F9" }}>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            height="150"
            width="150"
            style={{ borderRadius: "100%", marginLeft: "0.1em" }}
          />
        </Navbar.Brand>
        <Container
          style={{
            backgroundColor: "#3CB4F9",
            color: "white",
          }}
        >
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-start">
            <Navbar.Text
              style={{
                color: "white",
                marginRight: "4em",
                textAlign: "center",
                marginTop: "1em",
              }}
            >
              MUY ARGENTO{" "}
              <p style={{ marginTop: "1em" }}>
                Productos 100% Argentinos para el mundo.
              </p>
            </Navbar.Text>
            <Navbar.Text
              style={{
                color: "white",
                textDecoration: "underline",
                marginRight: "4em",
                marginTop: "1em",
              }}
            >
              Garantía de Envíos
              <Container
                style={{
                  display: "flex",
                  flexFlow: "row",
                  gap: "0.5em",
                  marginTop: "1em",
                }}
              >
                <img src={DHL} width="50" height="50" />
                <img src={Fedex} width="50" height="50" />
              </Container>
            </Navbar.Text>
            <Navbar.Text
              style={{
                color: "white",
                textDecoration: "underline",
                marginRight: "4em",
                marginTop: "1em",
              }}
            >
              Medios de Pago
              <Container
                style={{
                  display: "flex",
                  flexFlow: "row",
                  gap: "0.5em",
                  marginTop: "2em",
                }}
              >
                <img src={mastercard} width="30" height="30" />
                <img src={paypal} width="30" height="30" />
                <img src={visa} width="30" height="30" />
              </Container>
            </Navbar.Text>
            <Navbar.Text
              style={{
                color: "white",
                textDecoration: "underline",
                marginRight: "4em",
                marginTop: "1em",
              }}
            >
              Consutlas e Info <a>muyargento@muyargento.com</a>
              <Container>
                <li
                  style={{
                    display: "flex",
                    flexFlow: "row",
                    gap: "0.5em",
                    marginTop: "1em",
                  }}
                >
                  <a>
                    <img src={instagram} width="45" height="45" />
                  </a>
                  <a>
                    <img src={facebook} width="45" height="45" />
                  </a>
                </li>
              </Container>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <footer
        style={{
          backgroundColor: "#3CB4F9",
          textAlign: "center",
          color: "white",
          paddingTop: "1em",
          paddingBottom: "0.5em",
          borderTopColor: "white",
          borderTopWidth: "1px",
          borderTopStyle: "solid",
        }}
      >
        <p>Desarrollado por MA Servicios Informáticos ©</p>
      </footer>
    </>
  );
};

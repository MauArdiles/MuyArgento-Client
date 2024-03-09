import { GlobalContext } from "../../Provider/Provider";
import { useContext } from "react";
import logoMuyArgento from "../../assets/Logo Negra.jpeg";
import facebook from "../../assets/Facebook.png";
import twitter from "../../assets/Twitter.png";
import instagram from "../../assets/Instagram.png";
import logoDhl from "../../assets/DHL.png";
import fedex from "../../assets/Fedex.png";
import mastercard from "../../assets/Master.png";
import paypal from "../../assets/Paypal.png";
import visa from "../../assets/Visa.png";
import { Chatbot } from "../chatBot/Chatbot";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-info">
        <Logo />
        <div className="div-title">
          <p className="p-1">MUY ARGENTO</p>
          <p className="p-2">Productos 100% Argentinos para el Mundo</p>
        </div>
        <div className="div-envios">
          <p className="p-3">Garantia de Envíos</p>
          <div className="img-envios">
            <img src={logoDhl} alt="DHL" className="dhl" />
            <img src={fedex} alt="Fedex" className="fedex" />
          </div>
        </div>
        <div className="div-pagos">
          <p className="p-4">Medios de Pago</p>
          <div className="img-pagos">
            <img src={mastercard} alt="Master" className="img-master" />
            <img src={visa} alt="Visa" className="img-visa" />
            <img src={paypal} alt="PayPal" className="img-paypal" />
          </div>
        </div>
        <div className="div-info">
          <p className="p-5">Consultas e info</p>
          <p className="p-6">muyargento@muyargento.com</p>
        </div>
        <Chatbot />
      </div>
      <div className="Footer-rights">
        <p className="Footer-p">
          Desarrollado por MA Servicios Informáticos ©
        </p>
        <Rrss />
      </div>
    </footer>
  );
};

const Logo = () => {
  return (
    <a href="/" title="Muy Argento" className="Footer-logo">
      <img src={logoMuyArgento} alt="Logo Muy Argento" className="logo" />
    </a>
  );
};

const Rrss = () => {
  const { header } = useContext(GlobalContext);
  const { rrss } = header;
  return (
    <ul className="Footer-Rs">
      {rrss.map(({ id, title, href, icono }) => (
        <li key={id} className="Footer-liRs">
          <a className="a-rs" href={href} title={title}>
            <Icono nombre={icono} />
          </a>
        </li>
      ))}
    </ul>
  );
};
// eslint-disable-next-line react/prop-types
const Icono = ({ nombre }) => {
  return (
    <>
      {nombre === "twitter" && <img src={twitter} alt="twitter" />}
      {nombre === "instagram" && <img src={instagram} alt="instagram" />}
      {nombre === "facebook" && <img src={facebook} alt="facebook" />}
    </>
  );
};

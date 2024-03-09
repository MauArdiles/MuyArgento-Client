import { GlobalContext } from "../../Provider/Provider";
import { useContext } from "react";
/*---------------------------------------------------------------*/
import logoMuyArgento from "../../assets/Logo Negra.jpeg";
import frenchFlag from "../../assets/Bandera_Francia.png";
import spainFlag from "../../assets/Bandera_España.png";
import eeuuFlag from "../../assets/Bandera_EEUU.png";
import facebook from "../../assets/Facebook.png";
import twitter from "../../assets/Twitter.png";
import instagram from "../../assets/Instagram.png";
/*---------------------------------------------------------------*/
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
/*---------------------------------------------------------------*/
import "./Header.scss";
import { CartWidget } from "../cart/CartWidget";
/*---------------------------------------------------------------*/
export const Header = () => {
  return (
    <Navbar>
      <header className="Header">
        <div className="Wrapper-top">
          <Hamburger />
          <h2 className="Header-h2">PRODUCTOS 100% ARGENTINOS PARA EL MUNDO</h2>
          <Traductor />
        </div>
        <div className="Wrapper-principal">
          <Logo />
          <div className="Wrapper-nav">
            <h1 className="Header-h1">MUY ARGENTO</h1>
            <Nav />
          </div>
        </div>
      </header>
    </Navbar>
  );
};

/*---------------------------------------------------------------*/

const Logo = () => {
  return (
    <a href="/" title="Muy Argento" className="Header-logo">
      <img src={logoMuyArgento} alt="Logo Muy Argento" className="logo" />
    </a>
  );
};

/*---------------------------------------------------------------*/

const Nav = () => {
  const { header } = useContext(GlobalContext);
  const { menu } = header;
  return (
    <nav className="Header-Nav">
      <ul className="Header-menu">
        {menu.map(({ id, title, href }) => (
          <li key={id} className="Header-liMenu">
            <Link to={href} title={title} className="Header-a">
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <Rrss />
      <CartWidget />
    </nav>
  );
};

/*---------------------------------------------------------------*/

const Rrss = () => {
  const { header } = useContext(GlobalContext);
  const { rrss } = header;
  return (
    <ul className="Header-Rs">
      {rrss.map(({ id, title, href, icono }) => (
        <li key={id} className="Header-liRs">
          <a className="Header-rs" href={href} title={title}>
            <Icono nombre={icono} />
          </a>
        </li>
      ))}
    </ul>
  );
};

/*---------------------------------------------------------------*/
// eslint-disable-next-line react/prop-types
const Icono = ({ nombre }) => {
  return (
    <>
      {nombre === "twitter" && <img src={twitter} alt="twitter" />}
      {nombre === "instagram" && <img src={instagram} alt="twitter" />}
      {nombre === "facebook" && <img src={facebook} alt="twitter" />}
    </>
  );
};

/*---------------------------------------------------------------*/

// const Carrito = () => {
//     const {header} = useContext(GlobalContext)
//     const {carrito} = header
//     return (
//         <a className="Header-carrito" title={carrito.title} href={carrito.href}>
//             <Icono nombre={carrito.icono}/>
//         </a>
//     )
// };

/*---------------------------------------------------------------*/

const Traductor = () => {
  const { header } = useContext(GlobalContext);
  const { translate } = header;
  return (
    <ul className="Header-bandera">
      {translate.map(({ id, title, href, icono }) => (
        <li key={id} className="Header-li">
          <a className="Header-bandera-a" href={href} title={title}>
            <Bandera idioma={icono} />
          </a>
        </li>
      ))}
    </ul>
  );
};

/*---------------------------------------------------------------*/
// eslint-disable-next-line react/prop-types
const Bandera = ({ idioma }) => {
  return (
    <>
      {idioma === "Frances" && <img src={frenchFlag} alt="Frances" />}
      {idioma === "Español" && <img src={spainFlag} alt="Español" />}
      {idioma === "Ingles" && <img src={eeuuFlag} alt="Ingles" />}
    </>
  );
};

/*---------------------------------------------------------------*/

const Hamburger = () => {
  return (
    <button className="Header-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="Header-svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
};

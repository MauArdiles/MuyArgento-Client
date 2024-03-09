import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Cart } from "../components/cart/Cart";

export const CartPage = () => {
  return (
    <>
      <Header/>
      <h3 style={{textAlign:'center', fontSize:'18px'}}>Carrito de compras Muy Argento</h3>
      <Cart/>
      <Footer/>
    </>
  )
}

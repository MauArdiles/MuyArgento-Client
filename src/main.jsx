import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { Provider } from "./Provider/Provider.jsx";
// import { ProductProvider } from "./Provider/ProductContext.jsx";
import { AuthProvider } from "./Provider/AuthContext.jsx";
import { CartProvider } from "./Provider/CartContext.jsx";
// import { CommentProvider } from "./Provider/CommentContext.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id":
    "AdWeJoFgQunmU8FwraYsszQjmPTlSd0nqgKnf0Uc9aIxUc_C1Bwut3GRLxdRrVnTsytysJx56Y9F_xK0",
  intent: "capture",
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <AuthProvider>
      {/* <CommentProvider> */}
      <PayPalScriptProvider options={initialOptions}>
        {/* <ProductProvider> */}
        <CartProvider>
          <App />
        </CartProvider>
        {/* </ProductProvider> */}
      </PayPalScriptProvider>
      {/* </CommentProvider> */}
    </AuthProvider>
  </Provider>
);

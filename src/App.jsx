import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ErrorPage,
  AboutUs,
  ContactForm,
  Store,
  LoginPage,
  PaymmentSuccess,
  PaymmentFailed,
  CartPage,
} from "./pages/Index";
import { Toaster } from "react-hot-toast";
import { ProtectedRoutes } from "./ProtectedRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        {/* <Route path="/products/:id" element={<UpdateProduct />} /> */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/adminLogin" element={<LoginPage />} />
        {/* <Route path="/adminStore" element={<AdminPage/>}/> */}
        {/* <Route path="/adminComments" element={<AdminComments/>}/> */}
        <Route path="/paymmentSuccess" element={<PaymmentSuccess />} />
        <Route path="/paymmentFailed" element={<PaymmentFailed />} />
        <Route element={<ProtectedRoutes />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

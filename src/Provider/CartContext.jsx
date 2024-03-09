import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const getProductQuantity = (id) => {
    let productQuantity = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === id) {
        productQuantity = cart[i].quantity;
      }
    }
    return productQuantity;
  };

  const addToCart = (newProduct) => {
    const productInCartIndex = cart.findIndex(
      (item) => item.id === newProduct.id
    );

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        newProduct,
        quantity: 1,
      },
    ]);
  };

  const deleteFromCart = (prod) => {
    setCart((prevState) => prevState.filter((item) => item.id !== prod.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  function getTotalCost() {
    let totalCost = 0;
    cart.map((cartItem) => {
      totalCost += cartItem.newProduct.Price * cartItem.quantity;
    });
    return totalCost;
  }

  useEffect(() => {
    let data = localStorage.getItem("cart");
    if (!data) {
      console.log("No data available");
    } else {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const contextValue = {
    cart,
    getProductQuantity,
    deleteFromCart,
    getTotalCost,
    addToCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};



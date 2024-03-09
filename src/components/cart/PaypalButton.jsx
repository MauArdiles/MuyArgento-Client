/* eslint-disable react/prop-types */
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const PaypalButton = (props) => {
  function Message({ content }) {
    if (content !== "") {
      return alert(content);
    } else {
      return;
    }
  }

  const [message, setMessage] = useState("");
  return (
    <>
      <PayPalButtons
        style={{
          color: "blue",
          layout: "horizontal",
          label: "pay",
        }}
        createOrder={async () => {
          try {
            const response = await fetch("http://localhost:3000/api/orders", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              // use the "body" param to optionally pass additional order information
              // like product ids and quantities
              body: JSON.stringify({
                product: {
                  description: `ID: ${props.id}`,
                  price: props.cost,
                },
              }),
            });

            const orderData = await response.json();

            if (orderData.id) {
              return orderData.id;
            } else {
              const errorDetail = orderData?.details?.[0];
              const errorMessage = errorDetail
                ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                : JSON.stringify(orderData);

              throw new Error(errorMessage);
            }
          } catch (error) {
            console.error(error);
            setMessage(`Could not initiate PayPal Checkout...${error}`);
          }
        }}
        onApprove={async (data, actions) => {
          try {
            const response = await fetch(
              `http://localhost:3000/api/orders/${data.orderID}/capture`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            const orderData = await response.json();
            // Three cases to handle:
            //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
            //   (2) Other non-recoverable errors -> Show a failure message
            //   (3) Successful transaction -> Show confirmation or thank you message

            const errorDetail = orderData?.details?.[0];

            if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
              // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
              // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
              return actions.restart();
            } else if (errorDetail) {
              // (2) Other non-recoverable errors -> Show a failure message
              throw new Error(
                `${errorDetail.description} (${orderData.debug_id})`
              );
            } else {
              // (3) Successful transaction -> Show confirmation or thank you message
              // Or go to another URL:  actions.redirect('thank_you.html');
              actions.redirect("http://localhost:5173/PaymmentSuccess");
              const transaction =
                orderData.purchase_units[0].payments.captures[0];
              setMessage(
                `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`
              );
              console.log(
                "Capture result",
                orderData,
                JSON.stringify(orderData, null, 2)
              );
            }
          } catch (error) {
            console.error(error);
            setMessage(
              `Sorry, your transaction could not be processed...${error}`
            );
          }
        }}
        onClick={() => {
          const cartDetail = [];
          const cart = props.cart;
          console.log(cart);
          for (let i = 0; i < cart.length; i++) {
            const item = cart[i].newProduct.Name;
            const itemQuantity = cart[i].quantity;
            const itemPrice = cart[i].newProduct.Price;
            cartDetail.push(
              ` Producto: ${item} - Cantidad: ${itemQuantity} - Precio: $${itemPrice} --`
            );
          }
          console.log(`ID: ${props.id} - Detalle Carrito: ${cartDetail}`);

          axios
            .post("http://localhost:3000/send-mail", {
              to: "ventas@muyargento.com",
              subject: "Compra realizada con éxito",
              text: `ID Compra: ${props.id}
              Detalles del carrito: ${JSON.stringify(cartDetail)}`,
              html: `<h1> ID Compra: ${props.id}</h1>
              <h2> Detalles del carrito: ${JSON.stringify(cartDetail)} </h2>`,
            })
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      ></PayPalButtons>
      <Message content={message} />
    </>
  );
};

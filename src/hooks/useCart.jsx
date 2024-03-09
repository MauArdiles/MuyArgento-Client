import { useContext } from "react";
import { CartContext } from "../Provider/CartContext";

export const useCart = () =>{
    const context = useContext(CartContext)
    return context
}
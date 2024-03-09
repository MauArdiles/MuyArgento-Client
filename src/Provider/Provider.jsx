import { createContext} from "react"
import {v4 as uuidv4 } from "uuid"



export const GlobalContext = createContext()

// eslint-disable-next-line react/prop-types
export const Provider = ({children}) => {
    const bbdd = {
        header: {
            translate:[
                {id: uuidv4(), title: "Frances", href: "#", icono: 'Frances'},
                {id: uuidv4(), title: "Español", href: "#", icono: 'Español'},
                {id: uuidv4(), title: "Ingles" , href: "#", icono: 'Ingles'}
            ],
            menu:[
                {id: uuidv4(), title: "Home", href: "/"},
                {id: uuidv4(), title: "Tienda", href: "/store"},
                {id: uuidv4(), title: "AboutUs", href: "/aboutus"},
                {id: uuidv4(), title: "Contacto", href: "/contact"}    
            ],
            rrss:[
                {id: uuidv4(), title: "Twitter ", href: "#", icono: "twitter"},
                {id: uuidv4(), title: "Instagram ", href: "#", icono: "instagram"},
                {id: uuidv4(), title: "Facebook ", href: "#", icono: "facebook"}
    
            ],
            carrito: {
                title: "Carrito",
                href: "/shoppingCart",
                icono: "carrito"
    
            }
        }
        
    }

   return(
    <GlobalContext.Provider value={bbdd}>
        {children}
    </GlobalContext.Provider>
   )
}
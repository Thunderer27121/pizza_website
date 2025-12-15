import { createContext, useContext, useEffect, useState } from 'react'
import data from "./full_pizza_menu.json";

export const pizzaContext = createContext();
const Pizzaprovider = ({children}) => {

   const [pizzas , setpizza] = useState([]);
   useEffect(() => {
     setpizza(data)
   }, [])
   
  return (
    <pizzaContext.Provider value={{pizzas}}>
         {children}
    </pizzaContext.Provider>
  )
}

export default Pizzaprovider;
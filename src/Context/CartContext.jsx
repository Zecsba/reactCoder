import { createContext, useState } from "react";

export const CartContext = createContext();


const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([]);

    const addToCart = (item, object) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList, {
                    idItem: item.id,
                    imgItem: item.src,
                    titleItem: item.title,
                    priceItem: item.price,
                    cantidadItem: object
                }
            ]);
        } else {
            //al encontrarlo, entonces aumentamos el qty de ese producto
            found.cantidadItem += object;
        }
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
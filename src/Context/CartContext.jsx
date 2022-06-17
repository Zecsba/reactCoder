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

    const sumaProducts = (idItem) =>{
        let index = cartList.map(item => item.idItem).indexOf(idItem)
        return cartList[index].priceItem * cartList[index].cantidadItem
    }

    const sumaTotalProduct = () =>{
        let totalForitem = cartList.map(item => sumaProducts(item.idItem))
        return totalForitem.reduce((previousValue, currentValue) => previousValue + currentValue)
    }

    const calcItemsQty = () =>{
        let cantidadItems = cartList.map(item =>item.cantidadItem);
        return cantidadItems.reduce(((previousValue, currentValue)  => previousValue + currentValue), 0)
    }

    return(
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeList, 
            deleteItem, 
            sumaProducts,
            sumaTotalProduct,
            calcItemsQty
            }}>

            {children}

        </CartContext.Provider>
    )
}

export default CartContextProvider
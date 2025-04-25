import { createContext, useState } from 'react'
import { CartItemsProps, CartProvider_Props, ICartContext } from '../types/CartItems'

export const CartItemsContext = createContext<ICartContext>({} as ICartContext)

function CartProvider({ children }: CartProvider_Props) {
    const [cartItemsList, _] = useState<CartItemsProps[]>([])
    const [totalItemsNumber, setTotalItemsNumber] = useState(0)

    const increaseQuantityItem = () => { }

    const decreaseQuantityItem = () => {

        if (totalItemsNumber < 1) {
            setTotalItemsNumber(0)
        }
    }

    const addMovieToCart = () => {
    }

    const removeItemFromCart = () => {
    }

    return (
        <CartItemsContext.Provider value={{
            cartItemsList,
            totalItemsNumber,
            increaseQuantityItem,
            decreaseQuantityItem,
            addMovieToCart,
            removeItemFromCart
        }} >
            {children}
        </CartItemsContext.Provider>
    )
}

export default CartProvider
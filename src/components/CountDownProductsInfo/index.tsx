import { useContext } from "react"
import { CartItemsContext } from "../../contexts/CartItemsContext"
import './styles.css'

function CountDownProductsInfo() {
    const { totalItemsNumber } = useContext(CartItemsContext)

    return (
        <>
            <p className="countdown-products__text">
                {totalItemsNumber} itens
            </p>
        </>
    )
}

export default CountDownProductsInfo
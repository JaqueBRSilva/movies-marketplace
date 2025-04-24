import { useContext, useState } from "react";
import ADD_CART_ICON from '../../assets/shopping-cart-add.svg';
import { CartItemsContext } from "../../contexts/CartItemsContext";
import { AddToCartButtonProps } from "../../types/AddToCartButton";
import './styles.css';


function AddToCartButton({ ...props }: AddToCartButtonProps) {
    const [addMovie, setAddMovie] = useState(false)
    const { totalItemsNumber } = useContext(CartItemsContext)

    return (
        <>
            {
                (!addMovie) ? (

                    <button id={props.id}
                        className="add-cart-btn__button-main"
                        onClick={() => {
                            setAddMovie(true)
                            props.onMovieClicked()
                        }}
                    >
                        <div className="add-cart-btn__button-left-container">
                            <img
                                alt="adicionar filme no carrinho"
                                className="add-cart-btn__button-left-cart-icon"
                                src={ADD_CART_ICON}
                            />
                            <p className="add-cart-btn__left-number">0</p>
                        </div>

                        <p className="add-cart-btn__button-text">
                            {props.textContent}
                        </p>
                    </button>

                ) : (

                    <button id={props.id}
                        className="add-cart-btn__button-main-active"
                        onClick={() => props.onMovieClicked()}
                    >
                        <div className="add-cart-btn__button-left-container">
                            <img
                                alt="adicionar filme no carrinho"
                                className="add-cart-btn__button-left-cart-icon"
                                src={ADD_CART_ICON}
                            />
                            <p className="add-cart-btn__left-number">{totalItemsNumber}</p>
                        </div>

                        <p className="add-cart-btn__button-text">
                            {props.textContent}
                        </p>
                    </button>

                )}
        </>
    )
}

export default AddToCartButton
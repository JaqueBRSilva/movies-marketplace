import { useContext } from "react";
import { CartItemsContext } from "../../contexts/CartItemsContext";
import { MoviesProps } from "../../types/Movies";
import formatCurrencyForBRL from "../../utils/formatCurrency";
import AddToCartButton from "../AddToCartButton";
import './styles.css';


function MovieCard({ ...props }: MoviesProps) {
    const { addMovieToCart } = useContext(CartItemsContext)

    return (
        <div className="card__main-area">
            <div className="movie-card__container">
                <img
                    alt={`Capa ${props.title}`}
                    className="movie-card__movie-poster"
                    src={props.image}
                />

                <p className="movie-card__movie-title">
                    {props.title}
                </p>

                <p className="movie-card__movie-price">
                    {formatCurrencyForBRL(props.price)}
                </p>

                <AddToCartButton
                    textContent="ADICIONAR AO CARRINHO"
                    onMovieClicked={() => addMovieToCart(props)}
                />
            </div>
        </div>
    )
}

export default MovieCard
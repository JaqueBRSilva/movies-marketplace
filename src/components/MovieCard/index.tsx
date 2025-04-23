import { useContext } from "react";
import { MoviesListContext } from "../../contexts/MoviesListContext";
import { MoviesProps } from "../../types/Movies";
import formatCurrencyForBRL from "../../utils/formatCurrency";
import './styles.css';


function MovieCard({ ...props }: MoviesProps) {
    const { movies } = useContext(MoviesListContext)

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

            </div>
        </div>
    )
}

export default MovieCard
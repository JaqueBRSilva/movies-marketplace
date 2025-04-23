import { useContext, useEffect, useState } from "react"
import RELOAD_PAGE_IMG_LARGE from '../../assets/reload-page-img-lg.svg'
import RELOAD_PAGE_IMAGE from '../../assets/reload-page-img.svg'
import DefaultButton from "../../components/DefaultButton"
import LoadingSpinner from "../../components/LoadingSpinner"
import MovieCard from "../../components/MovieCard"
import SearchBar from "../../components/SearchBar"
import { MoviesListContext } from "../../contexts/MoviesListContext"
import { getMovies } from "../../services/movies"
import { MoviesProps } from "../../types/Movies"
import './styles.css'


export default function Home() {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [reloadImage, setReloadImage] = useState('')
    const { saveMovies } = useContext(MoviesListContext)
    const search = ''

    const fetchMoviesList = async () => {
        setIsLoading(true)

        const movies = await getMovies()
        setList(movies || [])
        saveMovies(movies)

        setIsLoading(false)
    }

    const handleReloadPage = async () => {
        await window.location.reload()
    }

    const onCheckWidthScreenSize = () => {
        let widthSize = screen.width

        if (widthSize <= 576) {
            setReloadImage(RELOAD_PAGE_IMAGE)

        } else {
            setReloadImage(RELOAD_PAGE_IMG_LARGE)
        }
    }

    const getSearchResults = (results: []) => {
        setIsLoading(true)

        setTimeout(() => {
            setList(results)
            setIsLoading(false)
        }, 1.2 * 1000)

    }

    useEffect(() => {
        fetchMoviesList()
        onCheckWidthScreenSize()
    }, [])

    return (
        <>
            {
                (isLoading == true) ? (

                    <LoadingSpinner />

                ) : (list.length == 0) ? (

                    <div className="home-page__reload-page-container">
                        <p className="home-page__reload-page-info">
                            {"Parece que não há nada por aqui :("}
                        </p>

                        <img
                            alt="recarregar página"
                            className="home-page__reload-image"
                            src={reloadImage}
                        />

                        <div className="home-page__button-container">
                            <DefaultButton
                                textContent="Recarregar página"
                                onClick={() => handleReloadPage()}
                            />
                        </div>
                    </div>

                ) : (list.length != 0) ? (

                    <>
                        <SearchBar
                            value={search}
                            onSearchResult={async (text) => getSearchResults(text)}
                        />

                        <div className="home-page__movies-grid-container">
                            {
                                list.map((movie: MoviesProps) => (
                                    <MovieCard
                                        key={movie.id}
                                        image={movie.image}
                                        title={movie.title}
                                        price={movie.price}
                                    />
                                ))
                            }
                        </div>
                    </>
                ) : <></>}
        </>
    )
}

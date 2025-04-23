import { useContext, useState } from "react"
import MAGNIFYING_GLASS_BLACK from '../../assets/magnifying-glass-black.png'
import MAGNIFYING_GLASS from '../../assets/magnifying-glass.png'
import { MoviesListContext } from "../../contexts/MoviesListContext"
import { MoviesProps } from "../../types/Movies"
import { SearchBarProps } from "../../types/SearchBar"
import './styles.css'


function SearchBar({ ...props }: SearchBarProps) {
    const [iconChange, setIconChange] = useState(MAGNIFYING_GLASS)
    const [contentSearch, setContentSearch] = useState('')
    const { movies } = useContext(MoviesListContext)

    const onChangeIcon = () => {
        if (contentSearch.length !== 0) {
            setIconChange(MAGNIFYING_GLASS_BLACK)
        } else {
            setIconChange(MAGNIFYING_GLASS)
        }
    }

    const handleSearchMovieByTitle = async (title: string, event?: Event) => {
        event?.preventDefault()

        const movieResult: [] | any = await movies.filter((movie: MoviesProps) => movie.title.toLowerCase().includes((title.toLowerCase())))
        props.onSearchResult(movieResult)
    }

    return (
        <form
            className="search-bar__container"
            onSubmit={() => handleSearchMovieByTitle(contentSearch)}
        >
            <input
                placeholder="Buscar filme pelo nome"
                value={contentSearch}
                onChange={(event) => {
                    onChangeIcon()
                    setContentSearch(event.target.value)
                }}
                onBlur={event => handleSearchMovieByTitle(event.target.value)}
                type="search"
                enterKeyHint={"search"}
                required
                className="search-bar__input"
            />

            <button
                className="search-bar__search-button"
                type="submit"
            >
                <img
                    src={iconChange}
                    className="search-bar__icon"
                />
            </button>
        </form>
    )
}

export default SearchBar
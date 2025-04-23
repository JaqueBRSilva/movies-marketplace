import { createContext, useState } from 'react';
import { IMoviesContext, MoviesProps, MoviesProvider_Props } from '../types/Movies';

export const MoviesListContext = createContext<IMoviesContext>({} as IMoviesContext)

function MoviesProvider({ children }: MoviesProvider_Props) {
    const [movies, setMovies] = useState<MoviesProps[]>([])

    const saveMovies = (list: []) => {
        setMovies(list)
    }

    return (
        <MoviesListContext.Provider value={{ movies, saveMovies }} >
            {children}
        </MoviesListContext.Provider>
    )
}

export default MoviesProvider
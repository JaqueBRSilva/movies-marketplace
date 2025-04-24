import axios from 'axios'

const moviesAPI = axios.create({
    baseURL: 'https://my-json-server.typicode.com/JaqueBRSilva/movies-marketplace/'
})

async function getMovies() {
    try {
        const response = await moviesAPI.get('/products')
        return response.data

    } catch (error) {
        (function (error: [] | any) {
            if (error.response) {
                console.error(error.response.data)
            }
        })
    }
}

export {
    getMovies
}

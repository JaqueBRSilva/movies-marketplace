import axios from 'axios'

const moviesAPI = axios.create({
    baseURL: 'http://localhost:3000'
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

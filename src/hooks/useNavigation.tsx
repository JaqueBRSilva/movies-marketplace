import { Link } from "react-router"

export function useNavigation() {

    function reloadPage() {
        window.location.reload()
    }

    function returnToHomeScreen() {
        return <Link to="/" />
    }

    function urlModifiedByQueryParams() {
    }


    return {
        reloadPage,
        returnToHomeScreen,
        urlModifiedByQueryParams
    }
}
import { Link } from "react-router"
import ShoppingBagIcon from "../ShoppingBagIcon"
import './styles.css'


function Header() {
    return (
        <header className="header__container">
            <Link to="/">
                <h1 className="header__title">
                    Movies Marketplace
                </h1>
            </Link>

            <Link to="/cart">
                <ShoppingBagIcon />
            </Link>
        </header>
    )
}

export default Header
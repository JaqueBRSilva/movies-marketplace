import BAG_ICON from '../../assets/bag.svg'
import CountDownProductsInfo from "../CountDownProductsInfo"
import './responsive.css'
import './styles.css'


function ShoppingBagIcon() {

    return (
        <div className='shopbag__container'>
            <div className='shopbag__container-group'>
                <p className="shopbag__item-name">
                    Meu Carrinho
                </p>

                <CountDownProductsInfo />
            </div>

            <div className='shopbag__icon-container'>
                <img
                    alt="sacola de compras"
                    className="shopbag__icon"
                    src={BAG_ICON}
                />
            </div>
        </div>
    )
}

export default ShoppingBagIcon
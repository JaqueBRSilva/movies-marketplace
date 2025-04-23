import LOADER_IMG from '../../assets/loader.png'
import './styles.css'

function LoadingSpinner() {
    return (
        <div className="loading__main-view">
            <img className='loading__animation'
                alt="loading spinner"
                src={LOADER_IMG}
            />
        </div>
    )
}

export default LoadingSpinner
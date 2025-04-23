import { DefaultButtonProps } from "../../types/DefaultButton";
import './styles.css';

function DefaultButton({ ...props }: DefaultButtonProps) {

    return (
        <button
            className="default-button__button"
            onClick={() => props.onClick()}
        >
            <p className="default-button__button-text">
                {props.textContent}
            </p>
        </button>
    )
}

export default DefaultButton

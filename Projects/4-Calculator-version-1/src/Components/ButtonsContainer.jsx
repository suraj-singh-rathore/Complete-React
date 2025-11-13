import styles from "./ButtonsConatiner.module.css";
import ButtonsConatiner from './ButtonsContainer';

const ButtonsContainer = () => {
    const buttonName = ['C', '1', '2', '3', '+', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

    return (
        <div className={styles.ButtonsContainer}>
            {buttonName.map((buttonName) => (
                <button className={styles.button}>C</button>
            ))}
        </div>
    );
};

export default ButtonsContainer;
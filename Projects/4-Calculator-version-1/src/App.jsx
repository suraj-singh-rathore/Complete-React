import Display from "./Components/Display";
import styles from "./App.module.css";
import ButtonsConatiner from './Components/ButtonsContainer';


function App() {

  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsConatiner />
    </div>
  );
}

export default App;
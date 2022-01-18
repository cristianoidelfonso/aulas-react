import Frase from "./frase";
import styles from "./HelloWorld.module.css";

function HelloWorld(){
    return (
        <div className={styles.helloWorldContainer}>
            <h1 className={styles.contents}>Componente Hello world!</h1>
            <Frase />    
        </div>
    );
}

export default HelloWorld;
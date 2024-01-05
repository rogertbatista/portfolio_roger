import { Link } from 'react-router-dom';
import styles from './Content.module.css';
import imgDev from './dev.svg';

function Content(){
    return(
        <main className={styles.content}>
            <div className={styles.text}>
                <p>Olá, sou <br/> <span>Roger Batista</span></p>
                <p>Dev Front End</p>
                <Link to="/sobre" className={styles.button}>
                    Saiba mais sobre mim
                </Link>
            </div>
            <figure className={styles.imgDev}>
                <img src={imgDev} alt="Imagem de um programador" />
            </figure>
        </main>
    );
}

export default Content;
import styles from './Sobre.module.css';
import Dev from './roger_dev.png';
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

function Sobre() {
    return (
        <>
            <section className={styles.sobre}>
                <div className={styles.bio}>
                    <figure className={styles.img}>
                        <img src={Dev} alt="Imagem do desenvolvedor" />
                    </figure>
                    <div className={styles.text}>
                        <h2>Sobre</h2>
                        <p>Sou <span>Roger Batista</span><br />
                            <strong>Dev Front End</strong>
                        </p>
                        <p>Iniciante na área de desenvolvimento web, mas procuro evoluir a cada projeto desenvolvido.</p>
                        <p>Sou apaixonado por transformar ideias em soluções digitais.</p>
                        <p>Um eterno interessado em desenvolvimento de aplicações dinâmicas e intuitivas,<br />com foco na experiência do usuário.</p>
                    </div>
                </div>
                <div className={styles.techs}>
                    <h3>Techs</h3>
                    <div className={styles.icons}>
                        <FaHtml5 className={styles.icon} />
                        <FaCss3Alt className={styles.icon} />
                        <IoLogoJavascript className={styles.icon} />
                        <FaReact className={styles.icon} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sobre;
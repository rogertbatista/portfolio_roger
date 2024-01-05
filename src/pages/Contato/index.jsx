import styles from './Contato.module.css';
import { BsWhatsapp, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

function Contato() {
    return (
        <>
            <section className={styles.contato}>
                <div className={styles.text}>
                    <h2>Contatos</h2>
                    <h3>Entre em Contato</h3>
                    <p>Para que possamos conversar mais sobre.</p>
                </div>
                <div className={styles.icons}>
                    <a href="https://wa.me/5521985868947" target='_blank' rel='noopener referrer'>
                        <BsWhatsapp />
                    </a>
                    <a href="https://www.instagram.com/dodidogenovo" target='_blank' rel='noopener referrer'>
                        <BsInstagram />
                    </a>
                    <a href="https://github.com/rogertbatista" target='_blank' rel='noopener referrer'>
                        <BsGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/roger-teixeira-batista-421507208/" target='_blank' rel='noopener referrer'>
                        <BsLinkedin />
                    </a>
                </div>
            </section>
        </>
    );
}

export default Contato;
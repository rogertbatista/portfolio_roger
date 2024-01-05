import styles from './Card.module.css';
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoArrowForwardOutline, IoLogoJavascript } from "react-icons/io5";

function Card({name, description, html_url}){
    return(
        <section className={styles.card}>
            <div className={styles.text}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.custom}>
                <div className={styles.icons}>
                    <FaHtml5 className={styles.icon}/>
                    <FaCss3Alt className={styles.icon}/>
                    <IoLogoJavascript className={styles.icon}/>
                    <FaReact className={styles.icon}/>
                </div>
                <a href={html_url} target='_blank' rel='noopener referrer' className={styles.button}>
                    <IoArrowForwardOutline />
                </a>
            </div>
        </section>
    );
}

export default Card;
import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

function Footer() {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentYear(new Date().getFullYear())
        }, 60000);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <footer className={styles.footer}>
            <p>
                <strong>Roger Teixeira Batista</strong> &copy;
                <span>{` ${currentYear}`}</span>
            </p>
        </footer>
    );
}

export default Footer;

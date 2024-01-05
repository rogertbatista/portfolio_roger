import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useState } from 'react';

function Header() {

    const [menuBtn, setMenuBtn] = useState(false);
    const menuToggle = () => {
        setMenuBtn(!menuBtn);
    }

    return (
        <header className={styles.header}>
            <Link to="/">
                <h1>Roger.dev</h1>
            </Link>
            <nav className={`${styles.lista} ${menuBtn ? styles.show : ''}`} onClick={menuToggle}>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contato">Contato</Link>
            </nav>
            <div onClick={menuToggle} className={styles.menuButton}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>
    );
}

export default Header;
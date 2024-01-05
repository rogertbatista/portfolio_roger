import styles from './PageNotFound.module.css';

function PageNotFound(){
    return(
        <section className={styles.notfound}>
            <h2>Algo deu errado! :(</h2>
            <p><span>404</span></p>
            <p>Página Não Localizada!</p>
        </section>
    );
}

export default PageNotFound;
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import styles from './Projetos.module.css';
import Loader from '../../components/Loader';
import ScrollToTopButton from '../../components/ScrollToTopButton';

// https://api.github.com/users/rogertbatista/repos

function Projetos(){

    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        const buscarRepositories = async () => {
            const response = await fetch('https://api.github.com/users/rogertbatista/repos?page=1&per_page=50');
            const data = await response.json();
            setRepositories(data);
        }
        buscarRepositories();
    })

    return(
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <div className={styles.cards}>
                        {
                            repositories.map((repo) => <Card name={repo.name} description={repo.description} html_url={repo.html_url}/>)
                        }
                    </div>
                ) : <Loader/>
            }
            <ScrollToTopButton/>
        </section>  
    );
}

export default Projetos;
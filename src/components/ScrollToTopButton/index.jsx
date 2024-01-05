import React, { useState, useEffect } from 'react';
import './button.css';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        // Define a visibilidade com base na posição de rolagem
        setIsVisible(scrollTop > 300);
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        // Adiciona um ouvinte de rolagem ao montar o componente
        window.addEventListener('scroll', handleScroll);

        // Remove o ouvinte de rolagem ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // O array vazio assegura que o efeito é executado apenas uma vez ao montar o componente

    return (
        <button onClick={handleClick} style={{ display: isVisible ? 'block' : 'none' }}>
            &#9650;
        </button>
    );
}

export default ScrollToTopButton;

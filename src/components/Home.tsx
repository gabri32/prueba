import React from 'react';
import Countdown from 'react-countdown';
import styles from './Home.module.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import letterTrainsImage from './letter_trains.png';

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

const Home: React.FC = () => {
    const items = [
        { label: 'Roadmap', icon: 'pi pi-fw pi-map', url: '#roadmap' },
        { label: 'Prevente', icon: 'pi pi-fw pi-tags', url: '#prevente' },
        { label: 'FAQ', icon: 'pi pi-fw pi-question', url: '#faq' }
    ];

    // Configurar la cuenta regresiva a 45 días
    const countdownDate = Date.now() + 45 * 24 * 60 * 60 * 1000;

    const countdownRenderer = ({ days, hours, minutes, seconds }: any) => {
        return (
            <div className={styles.countdown}>
            <div>
              <span>{days}.</span>
              <p>días</p>
            </div>
            <div>
              <span>{hours}.</span>
              <p>horas</p>
            </div>
            <div>
              <span>{minutes}.</span>
              <p>minutos</p>
            </div>
            <div>
              <span>{seconds}.</span>
              <p>segundos</p>
            </div>
          </div> 
        );
    };

    return (
        <div className={styles.container}>
            {/* Menú de Navegación */}
            <Menubar model={items} className={styles.menubar} />

            <div className={styles.cuerpo}>
                <div className={styles.contenedordetexto}>
                    <h1>Desbloquea <br /> el <br /> futuro</h1>
                </div>

                <img src={letterTrainsImage} alt="Traishunt Logo" />
                <p>Sé parte de la revolución en Finanzas descentralizadas</p>

                {/* Contador con cuenta regresiva */}
                <div className={styles.contenedorcontador}>
                <Countdown date={countdownDate} renderer={countdownRenderer} />
                </div>
                
<br />
                {/* Botón Preventa */}
                <Button label="Participa Preventa" className="p-button-rounded p-button-success" />

                {/* Dots */}
                <div className={styles.dots}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <p>Traishunt es una criptomoneda diseñada para transformar <br /> la interacción con las finanzas descentralizadas (DeFi). <br />Aprovecha esta oportunidad única de ser parte de su <br /> crecimiento desde la preventa.</p>
                   <br />
                    <span></span>
                    <span></span>
                </div>

                {/* Roadmap Link */}
                <a href="#roadmap">Roadmap</a>
                <p>Estamos en el mejor momento trabajando para dar a conocer este expectacular proyecto proximamente equipo traishumt.com</p>
            </div>
        </div>
    );
};

export default Home;

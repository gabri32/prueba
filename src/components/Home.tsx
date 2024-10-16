import React from 'react';
import Countdown from 'react-countdown';
import styles from './Home.module.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import letterTrainsImage from './Traishunt.png';

import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

const Home: React.FC = () => {
    const items = [
        { label: 'Roadmap', icon: 'pi pi-fw pi-map', url: '#roadmap' },
        { label: 'Prevente', icon: 'pi pi-fw pi-tags', url: '#prevente' },
        { label: 'FAQ', icon: 'pi pi-fw pi-question', url: '#faq' }
    ];

    const startDate = new Date('2024-10-04').getTime();
    
    // Fecha límite: 30 días después del 4 de octubre 2024
    const countdownDate = startDate + 30 * 24 * 60 * 60 * 1000;

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
                <br />
                <br />
                <div className={styles.contenedordetexto}>
                    <h1>Desbloquea <br /> el <br /> futuro</h1>
                </div>

                <img src={letterTrainsImage} alt="Traishunt Logo" />
                <p>Sé parte de la revolución <br />en Finanzas descentralizadas</p>
                <Button label="Participa Preventa" className="p-button-rounded " />
                {/* Contador con cuenta regresiva */}
                <br />
                <br /><br />
                <div className={styles.contenedorcontador}>
                <Countdown date={countdownDate} renderer={countdownRenderer} />
                </div>              
            </div>
            <div className={styles.container2}>
           
               
            </div>
        </div>
    );
};

export default Home;

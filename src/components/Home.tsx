import React from 'react';
import Countdown from 'react-countdown';
import styles from './Home.module.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import letterTrainsImage from './Traishunt.png';
import titletrais from './Bienvenidos a Traishunt (dex)@2x.png'
import barpoints from './Group 15.png'
import separator from './Vector 4.png'
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
            <img src={barpoints} alt="Imagen sobrepuesta"  className={styles.overlayimage } />
            <div className={styles.bloquemap}>

<img src={titletrais} alt="Traishunt Logo" />
<p><span>Traishunt</span> Traishunt es más que una criptomoneda; es la práctica de descubrir las oportunidades ocultas que el mercado ofrece,un ecosistema Defi, guiándote hacia un crecimiento financiero que antes parecía inalcanzable. Pero esto no se limita a las finanzas: es también una metáfora de la vida. Es el arte de perseguir tus sueños y metas con una perseverancia inquebrantable, siguiendo los rastros que te conducirán al éxito. Únete a nosotros en esta búsqueda incansable. Aquí, cada pista, cada rastro que sigues, te acerca un paso más a hacer realidad tus ambiciones. ¡Bienvenido al lugar donde la determinación se encuentra con la oportunidad</p>
            </div>
            <div>
            <div className={styles.slidercontainer}>
  <div className={styles.slider}>
    <div className={styles.card}><h1>Q4 2024</h1>
    <h5>INICIO PREVENTA</h5>
    <img src={separator} alt="bar" />
    </div>
    <div className={styles.card}><h1>Q1 2025</h1>
    <h5>STAKING Y MARKETING</h5>
    <img src={separator} alt="bar" /></div>
    <div className={styles.card}><h1>Q2 2025</h1>
    <h5>LIQUIDEZ Y AVANCES (DEX)</h5>
    <img src={separator} alt="bar" /></div>
    <div className={styles.card}><h1>Q3 2025</h1>
    <h5>EXPANSIÓN ECOSISTEMA <br />
    LISTADO EN COINGEKO</h5>
    <img src={separator} alt="bar" /></div>
    <div className={styles.card}><h1>Q4 2025</h1>
    <h5>LANZAMIENTO DEL DEX <br />
    BETA-DEMO Y TRADING</h5>
    <img src={separator} alt="bar" /></div>

  
  </div>
</div>

              </div>   
            </div>
        </div>
    );
};

export default Home;

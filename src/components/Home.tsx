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
import mati from './Polygon MATIC Icon 2.png'
import mati3 from './Polygon MATIC Icon 3.png'
import traisblack from './Traishunt (1).png'
import { Accordion, AccordionTab } from 'primereact/accordion';
import tokennomits from './Tokenomics.png'
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
const Home: React.FC = () => {
  const items = [
    { label: 'Roadmap', icon: 'pi pi-fw pi-map', url: '#roadmap' },
    { label: 'Prevente', icon: 'pi pi-fw pi-tags', url: '#prevente' },
    { label: 'FAQ', icon: 'pi pi-fw pi-question', url: '#faq' }
  ];
  const MyAccordion = () => {
    return (
        <Accordion>
            <AccordionTab header="5% Pre-venta: 1.050.000 tokens">
                <strong>Objetivo:</strong> Recaudar fondos iniciales para el desarrollo del proyecto.
            </AccordionTab>

            <AccordionTab header="25% DEX (Liquidity Pool): 5.250.000 tokens">
                Contenido adicional sobre DEX.
            </AccordionTab>

            <AccordionTab header="5% Promoción y Marketing: 1.050.000 tokens">
                Contenido adicional sobre Promoción y Marketing.
            </AccordionTab>
        </Accordion>
    );
}
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
        <img src={barpoints} alt="Imagen sobrepuesta" className={styles.overlayimage} />
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
                <h6>Preventa:</h6>
                <p>Comienza la primera fase de preventa de Traishunt,
                  una oportunidad exclusiva para los primeros inversores de adquirir TSH antes del
                  lanzamiento oficial. Durante esta etapa, los participantes podrán asegurar
                  su posición en el ecosistema a un precio preferencial.</p>
                <button className={styles.custombutton}>
                  <div className={styles.buttoncontent}>
                    <div className={styles.phase}>Fase 1 - Fundadores <br /><span>0.1 a 0.2</span></div>
                    <div className={styles.divider}></div>
                    <div className={styles.tokens}>150.000 <br /> TOKENS</div>
                  </div>
                </button>
                <br />
                <button className={styles.custombutton}>
                  <div className={styles.buttoncontent}>
                    <div className={styles.phase}>Fase 1 - Poseedores <br /><span>0.1 a 0.25</span></div>
                    <div className={styles.divider}></div>
                    <div className={styles.tokens}>150.000 <br /> TOKENS</div>
                  </div>
                </button>
                <br />
                <button className={styles.custombutton}>
                  <div className={styles.buttoncontent}>
                    <div className={styles.phase}>Fase 1 - Poseedores <br /><span>0.25 a 0.3</span></div>
                    <div className={styles.divider}></div>
                    <div className={styles.tokens}>150.000 <br /> TOKENS</div>
                  </div>
                </button>
                <div className={styles.letrafooter}>Comisión de retiro de preventa 10%</div>
              </div>

              <div className={styles.card}><h1>Q1 2025</h1>
                <h5>STAKING Y MARKETING</h5>
                <img src={separator} alt="bar" />
                <h6>Marketing y Lanzamiento del Token:</h6>
                <p>Arranca la fase de marketing del token Traishunt,
                  una campaña estratégica diseñada para crear conciencia y
                  generar interés en la comunidad global de criptomonedas.
                  <br />
                  El lanzamiento del token marcará un hito importante,
                  donde los primeros inversores recibirán sus TSH directamente en sus wallets.
                  Además, se abre el programa de staking de recompensas:</p>
                <button className={styles.custombutton}>
                  <div className={styles.buttoncontent}>
                    <span>        <strong>300.000 TOKENS</strong> <br />
                      Distribuidos en 3 años</span>
                  </div>
                </button>
                <div className={styles.letrafooter}>Las recompensas son escalonadas y se reparten en función  del tiempo de staking de cada usuario</div>
              </div>




              <div className={styles.card}><h1>Q2 2025</h1>
                <h5>LIQUIDEZ Y AVANCES (DEX)</h5>
                <img src={separator} alt="bar" /><p>
                  y En esta fase, continuamos con los avances en la creación de nuestro exchange
                  descentralizado (DEX), preparando el terreno para un lanzamiento completo en
                  el futuro cercano.
                  <br /><br />
                  El token TSH estará disponible para
                  la venta a un precio inicial de  <span className={styles.value}>$0.30</span> ,
                  y su valor irá aumentando progresivamente
                  en función de la liquidez aportada por la comunidad.
                  <br /><br />
                  Además, lanzamos el pool de liquidez,
                  permitiendo a los usuarios contribuir
                  a la estabilidad del ecosistema y obtener
                  recompensas adicionales por su participación.


                </p>
              </div>


              <div className={styles.card}><h1>Q3 2025</h1>
                <h5>EXPANSIÓN ECOSISTEMA <br />
                  LISTADO EN COINGEKO</h5>
                <img src={separator} alt="bar" />
                <p>nos enorgullece anunciar que TSH será enlistado en <span className={styles.CoinGecko}>CoinGecko</span>,
                  aumentando su visibilidad y credibilidad en el mercado global.
                  <br /><br />
                  Durante este trimestre, avanzamos la segunda fase de desarrollo
                  del DEX en su versións <strong>BETA-DEMO</strong> , acercándonos a nuestro objetivo
                  de ofrecer una plataforma avanzada para el trading descentralizado.</p></div>
              <div className={styles.card}><h1>Q4 2025</h1>
                <h5>LANZAMIENTO DEL DEX <br />
                  BETA-DEMO Y TRADING</h5>
                <img src={separator} alt="bar" />
                <p>El año concluye con el lanzamiento oficial del DEX en su versión <strong>BETA-DEMO</strong> BETA-DEMO,
                  una plataforma completamente funcional con un innovador sistema de trading
                  que marcará la diferencia en el espacio DeFi.
                  <br /><br />
                  Los usuarios podrán realizar intercambios entre los primeros pares: TSH/USDT y TSH/BTC,
                  abriendo nuevas oportunidades para el crecimiento y la diversificación de su portafolio.

                </p></div>


            </div>
          </div>

        </div>
      </div>
      <div className={styles.container3}>
      <div className={styles.container3_1}>
        <span><img src={tokennomits} alt="tokenomits" />TRAISHUNT</span>
        <div className={styles.tokencardscontainer}>
  <div className={styles.tokencard}>
    <div className={styles.icon}>
      <img src={mati} alt="TSH Logo" />
    </div>
    <div className={styles.content}>
      <h3>TRAISHUNT</h3>
      <p>Token</p>
    </div>
  </div>

  <div className={styles.tokencard}>
    <div className={styles.icon}>
      <img src={traisblack} alt="Traishunt Logo" />
    </div><br />
    <div className={styles.content}>
      <h3>Traishunt</h3>
      <p>21.000.000<br />Tokens</p>
    </div>
  </div>

  <div className={styles.tokencard}>
    <div className={styles.icon}>
      <img src={mati3} alt="Polygon Logo" />
    </div>
    <div className={styles.content}>
      <h3><strong>RED POL</strong></h3>
      <p>(Polygon pos chain)</p>
    </div>
  </div>
 
</div>
<MyAccordion />
        </div>
      </div>
    </div>
  );
};

export default Home;

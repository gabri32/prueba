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
import tokennomits from './Tokenomics.png'
import diagram from './diagram.png'
import pareja from './pareja 1.png'
import cien from './100.000.png'
import docientos from './200.000.png'
import trecientos from './300.000.png'
import cuatrocientos from './400.000.png'
import quinientos from './500.000.png'
import one from './copa.png'
import two from './monay.png'
import three from './coins.png'
import prevent from './Compra Traishunt en preventa.png'
import four from './capacitation.png'
import cohete from './cohete 3.png'
import barra from './barra.png'
import first from './1.png'
import second from './2.1.png'
import third from './3.1.png'
import why  from './why.png'
import niebla from './niebla 1.png'
import w from './whatsapicon.png'
import f from './facebookicion.png'
import i from './instaicon.png'
import grande from './Rectangle 41.png'
import pequeña from './Rectangle 43.png'
import estructura from './Estructura Técnica y Modelo económico.png'
import referido from "./referido 2.png";
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { useEffect, useRef } from 'react';
import roadmap from './RoadMap.png';
const Home: React.FC = () => {
  const items = [
    { label: 'Roadmap', icon: 'pi pi-fw pi-map', url: '#roadmap' },
    { label: 'Prevente', icon: 'pi pi-fw pi-tags', url: '#prevente' },
    { label: 'FAQ', icon: 'pi pi-fw pi-question', url: '#faq' }
  ];
  const accordionRef = useRef<HTMLDivElement>(null);
  const startDate = new Date('2024-10-04').getTime();

  // Fecha límite: 30 días después del 4 de octubre 2024
  const countdownDate = startDate + 30 * 24 * 60 * 60 * 1000;

  const countdownRenderer = ({ days, hours, minutes, seconds }: any) => {
    return (
      <div className={styles.countdown}>
        <div>
          <span><i>{days}.</i></span>
          <p><i> días </i></p>
        </div>
        <div>
          <span><i>{hours}.</i></span>
          <p><i>horas</i></p>
        </div>
        <div>
          <span><i>{minutes}.</i></span>
          <p><i>minutos</i></p>
        </div>
        <div>
          <span><i>{seconds}.</i></span>
          <p><i>segundos</i></p>
        </div>
      </div>
    );
  };
  const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
          <a href="#"><img src={traisblack} alt="trrais" /></a>
          </div>
          <div className={styles.footerSection}>
            <h3>Empresa</h3>
            <ul>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Inversionistas</a></li>
              <li><a href="#">Whitepaper</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Contactos</h3>
            <p>+57 3113637361</p>
            <p>+57 3113637361</p>
            <p>
              <a href="mailto:preventatrialshunt@gmail.com">
                preventatrialshunt@gmail.com
              </a>
            </p>
          </div>
          <div className={styles.socialIcons}>
            <a href="#"><img src={w} alt="WhatsApp" /></a>
            <a href="#"><img src={f} alt="Instagram" /></a>
            <a href="#"><img src={i} alt="Facebook" /></a>
          </div>
        </div>
      </footer>
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
      <div className={styles.barpoints}>
         <img src={barpoints} alt="" />
         </div>
        <div className={styles.bloquemap}>
       
          <img src={titletrais} alt="Traishunt Logo" />
          <p><span>Traishunt</span> es más que una criptomoneda; es la práctica de descubrir las oportunidades ocultas que el mercado ofrece,un ecosistema Defi, guiándote hacia un crecimiento financiero que antes parecía inalcanzable. Pero esto no se limita a las finanzas: es también una metáfora de la vida. Es el arte de perseguir tus sueños y metas con una perseverancia inquebrantable, siguiendo los rastros que te conducirán al éxito. Únete a nosotros en esta búsqueda incansable. Aquí, cada pista, cada rastro que sigues, te acerca un paso más a hacer realidad tus ambiciones. ¡Bienvenido al lugar donde la determinación se encuentra con la oportunidad</p>
        </div>
        <div>
          <div className={styles.roadmap}>
            <img src={roadmap} alt="" />
          </div>
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
          <br />
          <div className={styles.titulos}>
          <span className={styles.imagentituo}>
            <img src={tokennomits} alt="tokenomits" /><div>TRAISHUNT</div>
            </span>
          </div>
         
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
                <p>21.000.000 </p><p>Tokens</p>
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
          <div ref={accordionRef} className={styles.accordion}>
          <section className={styles.faq2}>
        <h2>Preguntas frecuentes</h2>
        <details>
          <summary>5% Pre-venta: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div className={styles.cantidad}><span>1.050.000 tokens</span></div> </summary>
          <p>Descripción sobre Traishunt...</p>
        </details>
        <details>
          <summary>¿Cuál es el suministro total de Traishunt?</summary>
          <p>Información sobre el suministro...</p>
        </details>
        <details>
          <summary>¿Cuál es el suministro total de Traishunt?</summary>
          <p>Información sobre el suministro...</p>
        </details>
        <details>
          <summary>¿Cuál es el suministro total de Traishunt?</summary>
          <p>Información sobre el suministro...</p>
        </details>
        <details>
          <summary>¿Cuál es el suministro total de Traishunt?</summary>
          <p>Información sobre el suministro...</p>
        </details>
        <details>
          <summary>¿Cuál es el suministro total de Traishunt?</summary>
          <p>Información sobre el suministro...</p>
        </details>
      </section>
          </div>
        </div>
        <br />
        <div className={styles.container3_2}>
          <div className={styles.vectorfull}>
            <h1>Distribución - Gráfico</h1>
            <img src={diagram} alt="diagram" />
          </div>
        </div>
      </div>
      <div className={styles.container4}>
        <div className={styles.banner}>
          <div className={styles.imageSection}>
            <img src={pareja} alt="Pareja" className={styles.coupleImage} />
          </div>
          <div className={styles.contentSection}>
            <h1>Beneficios Exclusivos para validadores</h1>
            <p className={styles.titlepcontent}><strong>(1,000 USD)</strong> 50 cupos primerizos</p>
            <p className={styles.titlepcontent}>Únete al selecto grupo de Validadores y disfruta de privilegios únicos:</p>
            <div className={styles.benefits}>
              <div className={styles.benefitItem}>
                <img src={one} alt="Icono 1" />
                <h3>Compra preferencial</h3>
                <p className={styles.titlepcontent2}>Accede a la moneda a un precio exclusivo</p>
              </div>

              <div className={styles.benefitItem}>

                <img src={two} alt="Icono 2" />

                <h3>Bonificación <br />en moneda</h3>

                <p className={styles.titlepcontent2}>Recibe 200USD en<br /> monedas*</p>

              </div>

              <div className={styles.benefitItem}>

                <img src={three} alt="Icono 3" />

                <h3>Staking <br /> Premium</h3>

                <p className={styles.titlepcontent2}>20% de las comisiones por transacción*</p>

              </div>

              <div className={styles.benefitItem}>

                <img src={four} alt="Icono 4" />

                <h3>Capacitación <br />VIP</h3>

                <p className={styles.titlepcontent2}>Exclusivos eventos para miembros</p>

              </div>

            </div>

            <button className={styles.ctaButton}>QUIERO SER VALIDADOR</button>

          </div>

        </div>

        <div className={styles.walletconection}>
          <img src={letterTrainsImage} alt="Traishunt Logo" />
          
         <div><h4>PREVENTA</h4></div> 
          <div className={styles.conection}>
            <div className={styles.f1}>   
              <h2>FASE 1</h2>
              <img src={prevent} alt="Traishunt prevent" className={styles.preventa} /></div>
      
        

            <div className={styles.contenedorcontador2}>
          <Countdown date={countdownDate} renderer={countdownRenderer} />
        
        </div><br />
        <div className={styles.prices}>
        $130.000 / $150.000
        <div className={styles.progresscontainer}>
        <div className={styles.progressbar} id="progress-bar"></div>
    </div>
        </div>
        <div>
          <br />
          <span>1 $THT = $0.12 USD</span>
         </div>
         <div className={styles.buyToken}>
          <span>TUS $THS COMPRADO:</span>
         </div>
         <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <label>Compra con USDT</label>
          <input type="text" placeholder="Ingresa monto" />
        </div>
        <div className={styles.inputWrapper}>
          <label>Recibes $THT</label>
          <input type="text" placeholder="Monto recibido" />
        </div>
      </div>
<br />
      <button className={styles.connectButton}>CONECTAR WALLET</button>
      <p className={styles.commission}>Comisión a wallet 10%</p>
          </div>
          <div className={styles.fases}>
            <div className={styles.fase}>
              <div className={styles.details}>
                <h2>FASE 2</h2>
                <p>350.000 TOKENS</p>
              </div>
              <div className={styles.info}>
                <p>1 $THT = $0.2 USD</p>
              </div>
            </div>
            <div className={styles.fase}>
              <div className={styles.details}>
                <h2>FASE 3</h2>
                <p>550.000 TOKENS</p>
              </div>
              <div className={styles.info}>
                <p>1 $THT = $0.3 USD</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contedorcohote}>
          <img src={estructura} alt="estructura" />

          <div className={styles.backfly}>
            <img src={cohete} alt="Traishunt prevent" className={styles.cohete} />
            <div className={styles.slidercontainer2}>
              <div className={styles.slider}>
                <div className={styles.card2}>
                  <h5>Total de monedas:</h5>
                  <p>Se emitirán 21.000.0000 de monedas. Esta cifra es fija, lo que significa que no habrá emisión adicional después de alcanzar este límite.</p>
                </div>
                <div className={styles.card2}>
                  <h5>Distribución por metas y Ciclos</h5>
                  <p>La distribución se realizará en varios ciclos, comenzando con el primer ciclo de 500,000 dólares en liquidez.
                  </p>

                </div>
                <div className={styles.card2}>
                  <h5>Ciclos:</h5>
                  <p>
                    En cada ciclo, las metas de recaudación de liquidez se irán incrementando, comenzando con 100,000 USD en la primer meta y llegando a 500,000 USD en el último en la última meta y culminación de ciclo
                </p>
                </div>
                <div className={styles.card2}>
                  <h5>Mecanismo de Liberación y Ventas:</h5>
                  <p>
                    Una vez alcanzada la meta de 100,000 USD, se habilitarán las ventas durante un período de tiempo predefinido.
                    <br /><br />
                    Durante este período, los propietarios de wallets podrán vender hasta 1/5 (20%) de sus monedas adquiridas, lo que se gestionará automáticamente a través de un contrato inteligente que limitará la cantidad de monedas que pueden ser vendida.</p></div>
                <div className={styles.card2}>
                  <h5>Progresión de Metas</h5>
                  <p>
                    Después del cierre del período de ventas, se habilitan nuevamente las compras hasta alcanzar la siguiente meta de 200,000 USD en liquidez, siguiendo la misma mecánica hasta completar el ciclo.
                    <br /><br />
                    Al completar el primer ciclo, se desbloquea el 100% de las monedas restantes en las wallets, permitiendo a los usuarios vender o retener sus monedas según su preferencia.

                  </p></div>


              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={styles.container5}>
        <div className={styles.whitecontainer}>
          <h2>Marketing de afiliados</h2>
          <div className={styles.commission}>
            <h3>COMISIÓN POR VENTA DIRECTA</h3>
            <div className={styles.directSale}>
              <p>
                <strong>5%</strong> Cada vez que una persona se registre y compre monedas a través de tu enlace de afiliado, recibirás un 5% de comisión de su compra. Este incentivo inicial premia tu esfuerzo hacia el crecimiento de la comunidad.
              </p>
            </div>
          </div>
          <div className={styles.bonuses}>
            <h3>COMISIONES POR BONOS</h3>
            <div className={styles.bonusLevels}>
              <div className={styles.level1}>
                <h4>2% <br /><span>Nivel 1</span></h4>
                <p>Además de la comisión por venta directa, ganarás un 2% de las compras realizadas por los referidos directos.</p>
              </div>
              <div className={styles.level2}>
                <h4>1% <br />
                  <span>Nivel 2</span></h4>
                <p>En este nivel, recibirás un 1% de comisión sobre las compras realizadas por los referidos de tus referidos directos.</p>
              </div>
              <div className={styles.level3}>
                <h4>1% <br />
                  <span>Nivel 3</span></h4>
                <p>Finalmente, ganarás un 1% de comisión sobre las compras de los referidos en tercer nivel.</p>
              
              </div>
              
            </div>
          <div className={styles.corto}><img src={referido} alt="Icono 4" /></div>  
          </div>
          <button className={styles.button}>QUIERO ESTOS BENEFICIOS   </button>
          
        </div>
      </div>
      <div className={styles.container6}>
        <div className={styles.howworks}>
          <img src={letterTrainsImage} alt="Traishunt Title" className={styles.titleImage} />
          <h3>El futuro del trading cripto con un sistema <br />de liberación inteligente</h3>
          <p>
            Traishunt es una criptomoneda diseñada para crear un ecosistema DeFi dinámico, combinando lo mejor del trading, el staking y los pools de liquidez.
          </p>
          <h4>¿Cómo funciona?</h4>
          <div className={styles.section}>
            <h5>1. Ciclos de inversión con Metas progresivas.</h5>
            <p>
              El sistema de Traishunt está basado en ciclos con inteligencia artificial. Cada ciclo tiene metas claras de recaudación de liquidez que comienzan con <strong>100,000 USD</strong> y aumentan hasta <strong>500,000 USD</strong>.
            </p>
          </div>
          <div className={styles.section2}>
            <h5>2. Ventas Basadas en Metas</h5>
            <p>
              Cada vez que una meta es alcanzada, se libera un porcentaje de las monedas adquiridas para que los inversionistas puedan vender.
            </p>
            <div className={styles.goals}>
              <div className={styles.goal}><span>Meta 1: &nbsp;&nbsp;&nbsp;&nbsp; USD</span><strong><img src={cien} alt="1" /> </strong><span> - Los inversionistas pueden vender hasta 20% de sus monedas.</span></div>
              <div className={styles.goal}><span>Meta 2: &nbsp;&nbsp;&nbsp;&nbsp; USD</span><strong><img src={docientos} alt="2" /></strong><span> - Se puede vender hasta 40% (20% de primera meta y 20% adicional).</span></div>
              <div className={styles.goal}><span>Meta 3: &nbsp;&nbsp;&nbsp;&nbsp; USD</span><strong><img src={trecientos} alt="3" /></strong><span> - Se puede vender hasta 60% (20% de cada una de las tres primeras metas).</span></div>
              <div className={styles.goal}><span>Meta 4: &nbsp;&nbsp;&nbsp;&nbsp; USD</span><strong><img src={cuatrocientos} alt="4" /> </strong><span> - Se puede vender hasta 80% (20% de cada una de las cuatro metas).</span></div>
              <div className={styles.goal}><span>Meta 5: &nbsp;&nbsp;&nbsp;&nbsp; USD</span><strong><img src={quinientos} alt="5" /> </strong><span> - Se puede vender hasta 100% (20% de cada una de las cinco metas).</span></div>
            </div>

          </div>
          <div className={styles.section}>
            <h5>3. Contratos inteligentes para mayor transparencia:</h5>
            <p>
              Todo el proceso es gestionado automáticamente por contratos inteligentes, que aseguran que las reglas sean claras y equitativas para todos los participantes. No hay intermediarios, solo transparencia y automatización total.
            </p>
          </div>
          <div className={styles.section}>
            <h5>4. Crecimiento continuo y desbloqueo completo</h5>
            <p>
              Después de cada ciclo, los inversionistas siguen beneficiándose del rendimiento de las inversiones participes y se acumulan nuevas oportunidades de venta. Al final de un primer ciclo completo, todas las monedas restantes en los wallets son desbloqueadas, dando la oportunidad de acceder al otro ciclo con 5 metas más.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container7}>
      <div className={styles.whytrias}>
      <img 
        src={why}
        alt="¿Por qué invertir en Traishunt?" 
        className={styles.titulo} 
      />

      <div className={styles.contenedorInfo}>
        <div className={styles.infoItem}>
          <img 
            src={first} 
            alt="Crecimiento Controlado" 
            className={styles.icono} 
          />
          <p className={styles.tituloItem}>Crecimiento Controlado</p>
          <p className={styles.descripcion}>
            Las metas escalonadas aseguran un proceso de ventas controlado, activando cada 
            repentina de mercado y permitiendo que los inversionistas aprovechen el 
            crecimiento en cada fase.
          </p>
        </div>

        <img 
          src={barra}
          alt="Separador" 
          className={styles.separador} 
        />

        <div className={styles.infoItem}>
          <img 
            src={second}
            alt="Transparencia y Seguridad" 
            className={styles.icono} 
          />
          <p className={styles.tituloItem}>Transparencia y Seguridad</p>
          <p className={styles.descripcion}>
            Los contratos inteligentes se encargan de gestionar todo, sin intervención 
            humana, lo que genera confianza y seguridad.
          </p>
        </div>

        <img 
       src={barra}
          alt="Separador" 
          className={styles.separador} 
        />

        <div className={styles.infoItem}>
          <img 
            src={third}
            alt="Oportunidades Continuas" 
            className={styles.icono} 
          />
          <p className={styles.tituloItem}>Oportunidades Continuas</p>
          <p className={styles.descripcion}>
            Cada meta abre nuevas posibilidades para que los inversionistas obtengan 
            beneficios, con un límite fijo de 21 millones de tokens que aseguran un 
            valor creciente a lo largo del tiempo.
          </p>
        </div>
      </div>
    </div>
      </div>
      <div className={styles.conatiner8}>
      <div className={styles.partof}>
      {/* Fondo con niebla y barras */}
      <div className={styles.background}>
        <img src={niebla} alt="Niebla" className={styles.fog} />
        <img src={grande} alt="Barra izquierda" className={`${styles.bar} ${styles.left}`} />
        <img src={pequeña} alt="Barra derecha" className={`${styles.bar} ${styles.right}`} />
      </div>

      {/* Encabezado */}
      <header className={styles.header}>
        <h1>
          Sé Parte de <span>Traishunt</span>
        </h1>
        <p>Únete a un ecosistema DeFi rentable, seguro y transparente...</p>
      </header>

      {/* Sección del video */}
      <section className={styles.videoSection}>
        <h2>Crea una wallet compatible</h2>
        <div className={styles.videoContainer}>
          <video controls poster="poster.jpg">
            <source src="video.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
      </section>

      {/* Preguntas frecuentes (FAQ) */}
      <section className={styles.faq}>
        <h2>Preguntas frecuentes</h2>
        <details>
          <summary>¿Qué es Traishunt?</summary>
          <p>Descripción sobre Traishunt...</p>
        </details>
        <details>
          <summary>¿Cuál es el suministro total de Traishunt?</summary>
          <p>Información sobre el suministro...</p>
        </details>
        {/* Agrega más FAQs según sea necesario */}
      </section>
    </div>
      </div>
      <div >
      <Footer  />
    </div>
    </div>
    
  );
};

export default Home;

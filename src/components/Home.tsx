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
import myVideo from './assets/1.mp4';
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
  const countdownDate = startDate + 40 * 24 * 60 * 60 * 1000;

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
            <li><a href="#">Terms and Conditions</a></li>
<li><a href="#">Legal</a></li>
<li><a href="#">Investors</a></li>
<li><a href="#">Whitepaper</a></li>

            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Contact</h3>
          
            <p>
              <a href="mailto:preventatrialshunt@gmail.com">
                preventtrialshunt@gmail.com
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
      <nav className={styles.navbar}>
        <ul className={styles.menu}>
            <li><a href="#home">ROADMAP</a></li>
            <li><a href="#services">PREVENTA</a></li>
            <li><a href="#about"> FAQ</a></li>
        </ul>
    </nav>

    <div className={styles.cuerpo}>
  <br />
  <br />

  <div className={styles.contenedordetexto}>
    <h1>Unlock <br /> the <br /> Future</h1>
  </div>

  <img src={letterTrainsImage} alt="Traishunt Logo" />
  <p>Be part of the revolution <br />in Decentralized Finance</p>
  <br />
  <Button label="Join the Presale" className="p-button-rounded" />
  {/* Countdown timer */}
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
    <p><span>Traishunt</span> is more than a cryptocurrency; it’s the practice of uncovering hidden opportunities the market offers—a DeFi ecosystem guiding you towards financial growth that once seemed out of reach. But this isn’t limited to finances: it's also a metaphor for life. It’s the art of chasing your dreams and goals with unwavering perseverance, following the traces that will lead you to success. Join us in this relentless pursuit. Here, every clue, every trace you follow, brings you one step closer to making your ambitions a reality. Welcome to the place where determination meets opportunity.</p>
  </div>
  <div>
    <div className={styles.roadmap}>
      <img src={roadmap} alt="" />
    </div>
    <div className={styles.slidercontainer}>
      <div className={styles.slider}>

        <div className={styles.card}><h1>Q4 2024</h1>
          <h5>PRESALE START</h5>
          <img src={separator} alt="bar" />
          <h6>Presale:</h6>
          <p>The first phase of Traishunt’s presale begins,
            an exclusive opportunity for early investors to acquire TSH before the
            official launch. During this stage, participants will be able to secure
            their position in the ecosystem at a preferential price.</p>
          <button className={styles.custombutton}>
            <div className={styles.buttoncontent}>
              <div className={styles.phase}>Phase 1 - Founders <br /><span>0.1 to 0.2</span></div>
              <div className={styles.divider}></div>
              <div className={styles.tokens}>150,000 <br /> TOKENS</div>
            </div>
          </button>
          <br />
          <button className={styles.custombutton}>
            <div className={styles.buttoncontent}>
              <div className={styles.phase}>Phase 1 - Holders <br /><span>0.1 to 0.25</span></div>
              <div className={styles.divider}></div>
              <div className={styles.tokens}>150,000 <br /> TOKENS</div>
            </div>
          </button>
          <br />
          <button className={styles.custombutton}>
            <div className={styles.buttoncontent}>
              <div className={styles.phase}>Phase 1 - Holders <br /><span>0.25 to 0.3</span></div>
              <div className={styles.divider}></div>
              <div className={styles.tokens}>150,000 <br /> TOKENS</div>
            </div>
          </button>
          <div className={styles.letrafooter}>Presale withdrawal fee 10%</div>
        </div>

        <div className={styles.card}><h1>Q1 2025</h1>
          <h5>STAKING AND MARKETING</h5>
          <img src={separator} alt="bar" />
          <h6>Marketing and Token Launch:</h6>
          <p>The marketing phase of the Traishunt token kicks off,
            a strategic campaign designed to raise awareness and
            generate interest in the global cryptocurrency community.
            <br />
            The token launch will mark an important milestone,
            where early investors will receive their TSH directly in their wallets.
            Additionally, the reward staking program opens:</p>
          <button className={styles.custombutton}>
            <div className={styles.buttoncontent}>
              <span><strong>300,000 TOKENS</strong> <br />
                Distributed over 3 years</span>
            </div>
          </button>
          <div className={styles.letrafooter}>Rewards are tiered and distributed based on each user's staking duration</div>
        </div>

        <div className={styles.card}><h1>Q2 2025</h1>
          <h5>LIQUIDITY AND ADVANCES (DEX)</h5>
          <img src={separator} alt="bar" />
          <p>In this phase, we continue to make strides in creating our decentralized exchange (DEX),
            laying the groundwork for a full launch in the near future.
            <br /><br />
            The TSH token will be available for
            sale at an initial price of <span className={styles.value}>$0.30</span>,
            and its value will progressively increase
            based on the liquidity provided by the community.
            <br /><br />
            Additionally, we are launching the liquidity pool,
            allowing users to contribute
            to the ecosystem's stability and earn
            additional rewards for their participation.
          </p>
        </div>

        <div className={styles.card}><h1>Q3 2025</h1>
          <h5>ECOSYSTEM EXPANSION <br />
            LISTING ON COINGECKO</h5>
          <img src={separator} alt="bar" />
          <p>We are proud to announce that TSH will be listed on <span className={styles.CoinGecko}>CoinGecko</span>,
            increasing its visibility and credibility in the global market.
            <br /><br />
            During this quarter, we progress the second phase of DEX development
            in its <strong>BETA-DEMO</strong> version, bringing us closer to our goal
            of offering an advanced platform for decentralized trading.</p>
        </div>

        <div className={styles.card}><h1>Q4 2025</h1>
          <h5>DEX LAUNCH <br />
            BETA-DEMO AND TRADING</h5>
          <img src={separator} alt="bar" />
          <p>The year concludes with the official launch of the DEX in its <strong>BETA-DEMO</strong> version,
            a fully functional platform with an innovative trading system
            that will make a difference in the DeFi space.
            <br /><br />
            Users will be able to trade the first pairs: TSH/USDT and TSH/BTC,
            opening new opportunities for growth and portfolio diversification.
          </p>
        </div>

      </div>
    </div>
  </div>
</div>

    
<div className={styles.contenerdoble}>
  <div className={styles.container3_1}>
    <br />
    <div className={styles.titulos}>
      <span className={styles.imagentituo}>
        <img src={tokennomits} alt="tokenomics" />
        <div>TRAISHUNT</div>
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
        </div>
        <br />
        <div className={styles.content}>
          <h3>Traishunt</h3>
          <p>21,000,000</p>
          <p>Tokens</p>
        </div>
      </div>

      <div className={styles.tokencard}>
        <div className={styles.icon}>
          <img src={mati3} alt="Polygon Logo" />
        </div>
        <div className={styles.content}>
          <h3><strong>POLYGON NETWORK</strong></h3>
          <p>(Polygon POS chain)</p>
        </div>
      </div>
    </div>

    <div ref={accordionRef} className={styles.accordion}>
      <section className={styles.faq2}>
        <h2>Distribution</h2>
        <details>
          <summary>5% Pre-sale:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.cantidad}>
              <span>1,050,000 tokens <br /><br />
                <p>Objective: Raise initial funds for project development.</p>
              </span>
            </div>
          </summary>
        </details>
        <details>
          <summary>25% DEX (Liquidity Pool):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.cantidad}><span>5,250,000 tokens <br /></span></div>
          </summary>
        </details>
        <details>
          <summary>5% Promotion and Marketing:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.cantidad}><span>1,050,000 tokens <br /></span></div>
          </summary>
        </details>
        <details>
          <summary>10% Staking:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.cantidad}><span>2,100,000 tokens <br /></span></div>
          </summary>
        </details>
        <details>
          <summary>15% Team:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.cantidad}><span>3,150,000 tokens <br /></span></div>
          </summary>
        </details>
        <details>
          <summary>30% General Distribution:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className={styles.cantidad}><span>6,300,000 tokens <br /></span></div>
          </summary>
        </details>
      </section>
    </div>
  </div>
</div>

      
<div className={styles.container3}>
  <br />
  <div className={styles.container3_2}>
    <div className={styles.vectorfull}>
      <h1>Distribution - Chart</h1>
      <img src={diagram} alt="diagram" />
    </div>
  </div>
</div>

<div className={styles.containerbaner}>
  <div className={styles.banner}>
    <div className={styles.imageSection}>
      <img src={pareja} alt="Couple" className={styles.coupleImage} />
    </div>
    <div className={styles.contentSection}>
      <h1>Exclusive Benefits for Validators</h1>
      <p className={styles.titlepcontent}><strong>(1,000 USD)</strong> 50 slots for first-time participants</p>
      <p className={styles.titlepcontent}>Join the select group of Validators and enjoy unique privileges:</p>
      <div className={styles.benefits}>
        <div className={styles.benefitItem}>
          <img src={one} alt="Icon 1" />
          <h3>Preferred Purchase</h3>
          <p className={styles.titlepcontent2}>Access the currency at an exclusive price</p>
        </div>

        <div className={styles.benefitItem}>
          <img src={two} alt="Icon 2" />
          <h3>Currency <br /> Bonus</h3>
          <p className={styles.titlepcontent2}>Receive 200 USD in<br /> tokens*</p>
        </div>

        <div className={styles.benefitItem}>
          <img src={three} alt="Icon 3" />
          <h3>Premium <br /> Staking</h3>
          <p className={styles.titlepcontent2}>20% of transaction fees*</p>
        </div>

        <div className={styles.benefitItem}>
          <img src={four} alt="Icon 4" />
          <h3>VIP <br /> Training</h3>
          <p className={styles.titlepcontent2}>Exclusive events for members</p>
        </div>
      </div>

      <button className={styles.ctaButton}>I WANT TO BE A VALIDATOR</button>
    </div>
  </div>
</div>

<div className={styles.container4}>
  <div className={styles.walletconection}>
    <img src={letterTrainsImage} alt="Traishunt Logo" />

    <div><h4>PRESALE</h4></div>
    <div className={styles.conection}>
      <div className={styles.f1}>
        <h2>PHASE 1</h2>
        <img src={prevent} alt="Traishunt Presale" className={styles.preventa} />
      </div>

      <div className={styles.contenedorcontador2}>
        <Countdown date={countdownDate} renderer={countdownRenderer} />
      </div><br />

      <div className={styles.prices}>
        $130,000 / $150,000
        <div className={styles.progresscontainer}>
          <div className={styles.progressbar} id="progress-bar"></div>
        </div>
      </div>

      <div className={styles.th}>
        <span>1 $THT = $0.12 USD</span>
      </div>
      
      <div className={styles.buyToken}>
        <span>YOUR PURCHASED $THS:</span>
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <label>Buy with USDT</label>
          <input type="text" placeholder="Enter amount" />
        </div>
        <div className={styles.inputWrapper}>
          <label>Receive $THT</label>
          <input type="text" placeholder="Received amount" />
        </div>
      </div>

      <button className={styles.connectButton}>CONNECT WALLET</button>
      <p className={styles.commission}>Wallet fee 10%</p>
    </div>

    <div className={styles.fases}>
      <div className={styles.fase}>
        <div className={styles.details}>
          <h2>PHASE 2</h2>
          <p>350,000 TOKENS</p>
        </div>
        <div className={styles.info}>
          <p>1 $THT = $0.2 USD</p>
        </div>
      </div>
      <div className={styles.fase}>
        <div className={styles.details}>
          <h2>PHASE 3</h2>
          <p>550,000 TOKENS</p>
        </div>
        <div className={styles.info}>
          <p>1 $THT = $0.3 USD</p>
        </div>
      </div>
    </div>
  </div>

  <div className={styles.contedorcohote}>
    <img src={estructura} alt="structure" />

    <div className={styles.backfly}>
      <img src={cohete} alt="Traishunt Presale" className={styles.cohete} />
      
      <div className={styles.slidercontainer2}>
        <div className={styles.slider2}>

          <div className={styles.card2}>
            <h5>Total Tokens:</h5>
            <p>21,000,000 tokens will be issued. This number is fixed, meaning there will be no additional issuance once this limit is reached.</p>
          </div>

          <div className={styles.card2}>
            <h5>Distribution by Goals and Cycles</h5>
            <p>The distribution will occur in various cycles, starting with the first cycle of 500,000 dollars in liquidity.</p>
          </div>

          <div className={styles.card2}>
            <h5>Cycles:</h5>
            <p>In each cycle, the liquidity fundraising goals will increase, starting with 100,000 USD in the first goal and reaching 500,000 USD in the final goal and cycle completion.</p>
          </div>

          <div className={styles.card2}>
            <h5>Release and Sales Mechanism:</h5>
            <p>Once the goal of 100,000 USD is reached, sales will be enabled for a predefined period.
              <br /><br />
              During this period, wallet owners can sell up to 1/5 (20%) of their acquired tokens, which will be automatically managed through a smart contract limiting the amount of tokens that can be sold.
            </p>
          </div>

          <div className={styles.card2}>
            <h5>Goal Progression</h5>
            <p>After the sales period closes, purchases are re-enabled until the next liquidity goal of 200,000 USD is reached, following the same mechanics until the cycle is completed.
              <br /><br />
              Upon completion of the first cycle, 100% of the remaining tokens in wallets will be unlocked, allowing users to sell or retain their tokens as they wish.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

<div className={styles.container5}>
  <div className={styles.whitecontainer}>
    <h2>Affiliate Marketing</h2>
    <div className={styles.commission}>
      <h3>DIRECT SALE COMMISSION</h3>
      <div className={styles.directSale}>
        <p>
          <strong>5%</strong> Every time someone registers and purchases tokens through your affiliate link, you will receive a 5% commission on their purchase. This initial incentive rewards your effort toward community growth.
        </p>
      </div>
    </div>
    <div className={styles.bonuses}>
      <h3>BONUS COMMISSIONS</h3>
      <div className={styles.bonusLevels}>
        <div className={styles.level1}>
          <h4>2% <br /><span>Level 1</span></h4>
          <p>In addition to the direct sale commission, you will earn a 2% commission on purchases made by your direct referrals.</p>
        </div>
        <div className={styles.level2}>
          <h4>1% <br />
            <span>Level 2</span></h4>
          <p>At this level, you will receive a 1% commission on purchases made by the referrals of your direct referrals.</p>
        </div>
        <div className={styles.level3}>
          <h4>1% <br />
            <span>Level 3</span></h4>
          <p>Finally, you will earn a 1% commission on purchases made by third-level referrals.</p>
        </div>
      </div>
      <div className={styles.corto}><img src={referido} alt="Icon 4" /></div>
    </div>
    <button className={styles.button}>I WANT THESE BENEFITS</button>
  </div>
</div>

<div className={styles.container6}>
  <div className={styles.howworks}>
    <img src={letterTrainsImage} alt="Traishunt Title" className={styles.titleImage} />
    <h3>The Future of Crypto Trading with an Intelligent Release System</h3>
    <p>
      Traishunt is a cryptocurrency designed to create a dynamic DeFi ecosystem, combining the best of trading, staking, and liquidity pools.
    </p>
    <h4>How does it work?</h4>
    <div className={styles.section}>
      <h5>1. Investment Cycles with Progressive Goals.</h5>
      <p>
        The Traishunt system is based on cycles with artificial intelligence. Each cycle has clear liquidity-raising goals starting at <strong>100,000 USD</strong> and increasing to <strong>500,000 USD</strong>.
      </p>
    </div>
    <div className={styles.section2}>
      <h5>2. Goal-Based Sales</h5>
      <p>
        Each time a goal is reached, a percentage of the acquired tokens is released for investors to sell.
      </p>
      <div className={styles.goals}>
        <div className={styles.goal}><span>Goal 1: &nbsp;&nbsp;&nbsp;&nbsp; USD</span><strong><img src={cien} alt="1" /></strong><span> - Investors can sell up to 20% of their tokens.</span></div>
        <div className={styles.goal}><span>Goal 2: &nbsp;&nbsp;&nbsp;&nbsp; USD</span><strong><img src={docientos} alt="2" /></strong><span> - Up to 40% can be sold (20% from the first goal and an additional 20%).</span></div>
        <div className={styles.goal}><span>Goal 3: &nbsp;&nbsp;&nbsp;&nbsp; USD</span><strong><img src={trecientos} alt="3" /></strong><span> - Up to 60% can be sold (20% from each of the first three goals).</span></div>
        <div className={styles.goal}><span>Goal 4: &nbsp;&nbsp;&nbsp;&nbsp; USD</span><strong><img src={cuatrocientos} alt="4" /></strong><span> - Up to 80% can be sold (20% from each of the four goals).</span></div>
        <div className={styles.goal}><span>Goal 5: &nbsp;&nbsp;&nbsp;&nbsp; USD</span><strong><img src={quinientos} alt="5" /></strong><span> - Up to 100% can be sold (20% from each of the five goals).</span></div>
      </div>
    </div>
    <div className={styles.section}>
      <h5>3. Smart Contracts for Greater Transparency:</h5>
      <p>
        The entire process is automatically managed by smart contracts, ensuring that the rules are clear and fair for all participants. There are no intermediaries, only transparency and complete automation.
      </p>
    </div>
    <div className={styles.section}>
      <h5>4. Continuous Growth and Full Unlocking</h5>
      <p>
        After each cycle, investors continue to benefit from the returns of their participatory investments, and new selling opportunities accumulate. At the end of a complete first cycle, all remaining tokens in the wallets are unlocked, providing the opportunity to access the next cycle with 5 more goals.
      </p>
    </div>
  </div>
</div>

<div className={styles.container7}>
  <div className={styles.whytrias}>
    <img 
      src={why} 
      alt="Why invest in Traishunt?" 
      className={styles.titulo} 
    />

    <div className={styles.contenedorInfo}>
      <div className={styles.infoItem}>
        <img 
          src={first} 
          alt="Controlled Growth" 
          className={styles.icono} 
        />
        <p className={styles.tituloItem}>Controlled Growth</p>
        <p className={styles.descripcion}>
          The tiered goals ensure a controlled sales process, activating with each market movement and allowing investors to capitalize on growth at each phase.
        </p>
      </div>

      <img 
        src={barra} 
        alt="Separator" 
        className={styles.separador} 
      />

      <div className={styles.infoItem}>
        <img 
          src={second} 
          alt="Transparency and Security" 
          className={styles.icono} 
        />
        <p className={styles.tituloItem}>Transparency and Security</p>
        <p className={styles.descripcion}>
          Smart contracts handle everything without human intervention, generating trust and security.
        </p>
      </div>

      <img 
        src={barra} 
        alt="Separator" 
        className={styles.separador} 
      />

      <div className={styles.infoItem}>
        <img 
          src={third} 
          alt="Continuous Opportunities" 
          className={styles.icono} 
        />
        <p className={styles.tituloItem}>Continuous Opportunities</p>
        <p className={styles.descripcion}>
          Each goal opens new possibilities for investors to gain profits, with a fixed limit of 21 million tokens ensuring increasing value over time.
        </p>
      </div>
    </div>
  </div>
</div>

<div className={styles.conatiner8}>
  <div className={styles.partof}>
    {/* Foggy background and bars */}
    <div className={styles.background}>
      <img src={niebla} alt="Fog" className={styles.fog} />
      <img src={grande} alt="Left bar" className={`${styles.bar} ${styles.left}`} />
      <img src={pequeña} alt="Right bar" className={`${styles.bar} ${styles.right}`} />
    </div>

    {/* Header */}
    <header className={styles.header}>
      <h1>
        Be Part of <span>Traishunt</span>
      </h1>
      <p>Join a profitable, secure, and transparent DeFi ecosystem...</p>
    </header>

    {/* Video section */}
    <section className={styles.videoSection}>
      <h2>Create a compatible wallet</h2>
      <div className={styles.videoContainer}>
        <video controls poster="poster.jpg">
          <source src={myVideo} type="video/mp4" />
          Your browser does not support HTML5 videos.
        </video>
      </div>
    </section>

    {/* Frequently Asked Questions (FAQ) */}
    <section className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      <details>
        <summary>What is Traishunt?</summary>
        Traishunt is a cryptocurrency that aims to revolutionize the DeFi (decentralized finance) space by offering a complete ecosystem with a decentralized exchange (DEX), staking, liquidity pools, and a 4-level compensation system. Additionally, it is designed with a unique coin release mechanism that provides control and security for investors.
      </details>
      <details>
        <summary>What is the total supply of Traishunt?</summary>
        Traishunt has a fixed supply of 21,000,000 coins. There will be no additional issuance after this limit is reached, ensuring a controlled supply.
      </details>
      <details>
        <summary>How does the goals and cycles system of Traishunt work?</summary>
        The Traishunt system is divided into cycles, each with liquidity raising goals. The goals start at $100,000 USD in the first cycle and progressively increase to $500,000 USD. As goals are reached, a percentage of the coins acquired by investors is unlocked.
      </details>
      <details>
        <summary>What happens when a goal is reached?</summary>
        When a goal is reached, investors can sell a percentage of their acquired coins. For example:
        <br />
        ● Upon reaching Goal 1 of $100,000 USD, investors can sell up to 20% of their coins.
        <br />
        ● Upon reaching Goal 2 of $200,000 USD, they can sell up to 40% (20% from the first goal + 20% from the second).
        <br />
        ● At Goal 3 of $300,000 USD, they can sell up to 60% (20% from each of the first three goals), and so on until reaching 100% at Goal 5.
      </details>
      <details>
        <summary>What is the total supply of Traishunt?</summary>
        Traishunt has a fixed supply of 21,000,000 coins. There will be no additional issuance after this limit is reached, ensuring a controlled supply.
      </details>
      <details>
        <summary>What is the total supply of Traishunt?</summary>
        Traishunt has a fixed supply of 21,000,000 coins. There will be no additional issuance after this limit is reached, ensuring a controlled supply.
      </details>
      {/* Add more FAQs as needed */}
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

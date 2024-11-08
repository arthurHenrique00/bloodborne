import GlobalStyle from '../../../styles'
import { Enemy, EnemyCarousel } from './style'
import { useEffect } from 'react'
import Aos from 'aos'
import Footer from '../../Footer'
import HeaderT from '../../HeaderSec'
import ludwig from '../../../bloodborne_img/ludwig.jpg'
import maria from '../../../bloodborne_img/lady_maria.jpg'
import gehrman from '../../../bloodborne_img/gehrman_bos.jpg'
import gascoigne from '../../../bloodborne_img/gascoigne.jpg'
import logarius from '../../../bloodborne_img/logarius.png'
import moon from '../../../bloodborne_img/moonpresence.jpg'
import border from '../../../bloodborne_img/border.png'
import lady_maria from '../../../bloodborne_img/ladymaria.png'
import m_1 from '../../../bloodborne_img/maria_1.png'
import m_2 from '../../../bloodborne_img/maria_2.png'
import m_3 from '../../../bloodborne_img/maria_3.png'
import m_4 from '../../../bloodborne_img/maria_4.png'
import m_weapon from '../../../bloodborne_img/rakuyo.jpg'

import gehrman_boss from '../../../bloodborne_img/gehrman_banner.png'
import gehrman_weapon from '../../../bloodborne_img/gehrman_blade.webp'
import g_1 from '../../../bloodborne_img/gehrmans_1.webp'
import g_2 from '../../../bloodborne_img/gehrmans_2.png'
import g_3 from '../../../bloodborne_img/gehrmans_3.png'

import gascoigne_boss from '../../../bloodborne_img/gascoigne-bnner.png'
import gascoigne_axe from '../../../bloodborne_img/gascoigne_axe.webp'
import gascoigne_pistol from '../../../bloodborne_img/gascoigne_pistol.webp'
import ga_1 from '../../../bloodborne_img/gascoigne_1.png'
import ga_2 from '../../../bloodborne_img/gascoigne_2.png'
import ga_3 from '../../../bloodborne_img/gascoignes_3.webp'
import ga_4 from '../../../bloodborne_img/gascoignes_4.png'

import logarius_boss from '../../../bloodborne_img/logarius_banner.png'
import logarius_foice from '../../../bloodborne_img/logarius_scythe.jpg'
import logarius_wheel from '../../../bloodborne_img/logarius_wheel.webp'

import ludwig_boss from '../../../bloodborne_img/ludwid-blade-removebg-preview.png'
import ludwig_blade from '../../../bloodborne_img/ludwig_holy_blade.jpg'
import ludwig_pistol from '../../../bloodborne_img/ludwig_rifle.webp'

const Enemies = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <GlobalStyle />
      <HeaderT />
      <section>
        <h2
          style={{
            fontFamily: 'tangerine',
            fontSize: '64px',
            textAlign: 'center',
            marginTop: '32px'
          }}
        >
          Chefes Marcantes
        </h2>
        <EnemyCarousel>
          <div className="bossCard">
            <a href="#maria">
              <img src={maria} />
            </a>
          </div>
          <div className="bossCard">
            <a href="#gehrman">
              <img src={gehrman} />
            </a>
          </div>
          <div className="bossCard">
            <a href="#gascoigne">
              <img src={gascoigne} />
            </a>
          </div>
          <div className="bossCard">
            <a href="#ludwig">
              <img src={ludwig} />
            </a>
          </div>
          <div className="bossCard">
            <a href="#logarius">
              <img src={logarius} />
            </a>
          </div>
          <div className="bossCard">
            <a href="">
              <img src={moon} />
            </a>
          </div>
        </EnemyCarousel>
        <div style={{ textAlign: 'center', marginBottom: '200px' }}>
          <img src={border} />
        </div>
      </section>
      <Enemy>
        <div id="maria" className="boss" data-aos="fade-left">
          <img src={lady_maria} />
          <div className="weapons">
            <img src={m_weapon} />
            <img src={m_1} />
            <img src={m_2} />
            <img src={m_3} />
            <img src={m_4} />
          </div>
        </div>
        <div id="gehrman" className="boss" data-aos="fade-right">
          <img src={gehrman_boss} />
          <div className="weapons">
            <img src={gehrman_weapon} />
            <img src={g_1} />
            <img src={g_2} />
            <img src={g_3} />
          </div>
        </div>
        <div className="boss" data-aos="fade-left">
          <img src={gascoigne_boss} />
          <div className="weapons">
            <img src={gascoigne_axe} />
            <img src={gascoigne_pistol} />
            <img src={ga_1} />
            <img src={ga_2} />
            <img src={ga_3} />
            <img src={ga_4} />
          </div>
        </div>
        <div className="boss" data-aos="fade-right">
          <img src={logarius_boss} />
          <div className="weapons">
            <img src={logarius_foice} />
            <img src={logarius_wheel} />
          </div>
        </div>
        <div className="boss" data-aos="fade-down">
          <img src={ludwig_boss} />
          <div className="weapons">
            <img src={ludwig_blade} />
            <img src={ludwig_pistol} />
          </div>
        </div>
      </Enemy>
      <Footer />
    </>
  )
}

export default Enemies

import Footer from '../../Footer'
import HeaderT from '../../HeaderSec'
import ludwig from '../../../bloodborne_img/ludwig.jpg'
import maria from '../../../bloodborne_img/lady_maria.jpg'
import gehrman from '../../../bloodborne_img/gehrman_bos.jpg'
import gascoigne from '../../../bloodborne_img/gascoigne.jpg'
import logarius from '../../../bloodborne_img/logarius.png'
import moon from '../../../bloodborne_img/moonpresence.jpg'
import GlobalStyle from '../../../styles'
import { Enemy } from './style'

const Enemies = () => (
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
      <Enemy>
        <div className="bossCard">
          <img src={maria} />
        </div>
        <div className="bossCard">
          <img src={gehrman} />
        </div>
        <div className="bossCard">
          <img src={gascoigne} />
        </div>
        <div className="bossCard">
          <img src={ludwig} />
        </div>
        <div className="bossCard">
          <img src={logarius} />
        </div>
        <div className="bossCard">
          <img src={moon} />
        </div>
      </Enemy>
    </section>
    <Footer />
  </>
)

export default Enemies

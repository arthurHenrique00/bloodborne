import { useEffect } from 'react'
import Aos from 'aos'

import { Banner, Friend } from './style'
import Footer from '../../Footer'
import bg_castle from '../../../bloodborne_img/char-back.jpg'
import eileen from '../../../bloodborne_img/eileen.webp'
import eileen_1 from '../../../bloodborne_img/eileen_1.png'
import doll from '../../../bloodborne_img/the_doll.png'
import doll_1 from '../../../bloodborne_img/doll_1.png'
import alfred from '../../../bloodborne_img/alfred.png'
import alfred_1 from '../../../bloodborne_img/alfred_1.png'
import anne from '../../../bloodborne_img/annelise.png'
import anne_1 from '../../../bloodborne_img/annelise1.png'
import valtr from '../../../bloodborne_img/valtr.png'
import valtr_1 from '../../../bloodborne_img/valtr_1.png'
import gehr from '../../../bloodborne_img/gehrman.png'
import gehr_1 from '../../../bloodborne_img/gehrman_1.png'
import banner_char from '../../../bloodborne_img/banner_char.png'
import HeaderT from '../../HeaderSec'

const Friendly = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div
      style={{
        backgroundImage: `url(${bg_castle})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <HeaderT />
      <Banner>
        <div>
          <img className="bannerchar" src={banner_char} />
          <div>
            <h2>Sobre esta aba</h2>
            <p>
              Explore os personagens enigmáticos que habitam o mundo sombrio de
              Bloodborne. Cada um deles, desde os caçadores atormentados até os
              misteriosos habitantes de Yharnam, carrega uma história única,
              repleta de mistérios e horrores antigos. Nesta seção, mergulhe nas
              origens, motivações e traumas dos principais personagens que
              moldam a narrativa do jogo, descobrindo como suas jornadas se
              entrelaçam com a busca pelo sangue e a luta contra as
              monstruosidades da noite eterna.
            </p>
          </div>
        </div>
      </Banner>
      <Friend>
        <div className="friends">
          <div className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div data-bs-interval="1000" className="carousel-item active">
                <img
                  style={{ width: '170px', height: '300px' }}
                  src={eileen_1}
                />
              </div>
              <div className="carousel-item">
                <img style={{ width: '170px', height: '300px' }} src={eileen} />
              </div>
            </div>
          </div>
          <h2>Eileen</h2>
          <p>
            Ela é uma caçadora de caçadores, uma figura misteriosa que se
            especializa em eliminar outros caçadores que sucumbiram à loucura e
            ao sangue amaldiçoado de Yharnam. Vestindo uma máscara de corvo e
            uma capa escura com penas que a fazem lembrar um pássaro sinistro
          </p>
        </div>
        <div className="friends">
          <div className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div data-bs-interval="1000" className="carousel-item active">
                <img style={{ width: '170px', height: '300px' }} src={doll} />
              </div>
              <div className="carousel-item">
                <img style={{ width: '170px', height: '300px' }} src={doll_1} />
              </div>
            </div>
          </div>
          <h2>A boneca</h2>
          <p>
            A Boneca é uma presença calma e reconfortante no mundo sombrio de
            Bloodborne. Ela reside no Sonho do Caçador, onde oferece suporte e
            orientação ao jogador, ajudando-o a fortalecer suas habilidades ao
            longo da jornada. Inspirada em uma mulher real que Gehrman conheceu.
          </p>
        </div>
        <div className="friends">
          <div className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div data-bs-interval="1000" className="carousel-item active">
                <img style={{ width: '170px', height: '300px' }} src={alfred} />
              </div>
              <div className="carousel-item">
                <img
                  style={{ width: '170px', height: '300px' }}
                  src={alfred_1}
                />
              </div>
            </div>
          </div>
          <h2>Alfred</h2>
          <p>
            Alfred é um Caçador de Vilebloods e devoto fervoroso da Igreja da
            Cura em Bloodborne. Apresentando-se como um homem cordial e
            amigável, ele oferece ajuda e informações ao jogador, com uma
            postura quase cavalheiresca que esconde uma intensidade
            perturbadora.
          </p>
        </div>
        <div className="friends" data-aos="fade-right">
          <div className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div data-bs-interval="1000" className="carousel-item active">
                <img style={{ width: '170px', height: '300px' }} src={anne_1} />
              </div>
              <div className="carousel-item">
                <img style={{ width: '170px', height: '300px' }} src={anne} />
              </div>
            </div>
          </div>
          <h2>Annelise</h2>
          <p>
            Annalise, conhecida como a Rainha dos Vilebloods, é uma das figuras
            mais enigmáticas e sedutoras de Bloodborne. Ela governa Cainhurst,
            um castelo sombrio e isolado, e é a líder dos Vilebloods, uma
            linhagem nobre que abraça a maldição do sangue em busca de poder e
            imortalidade.
          </p>
        </div>
        <div className="friends" data-aos="fade-down">
          <div className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div data-bs-interval="1000" className="carousel-item active">
                <img style={{ width: '170px', height: '300px' }} src={valtr} />
              </div>
              <div className="carousel-item">
                <img
                  style={{ width: '170px', height: '300px' }}
                  src={valtr_1}
                />
              </div>
            </div>
          </div>
          <h2>Valtr</h2>
          <p>
            Valtr é o líder dos Caçadores da Liga, uma facção em Bloodborne que
            acredita na justiça e na purificação de Yharnam por meio da caça às
            abominações. Ele é um personagem imponente, com uma presença
            inconfundível devido ao grande balde metálico que usa como capacete
          </p>
        </div>
        <div className="friends" data-aos="fade-left">
          <div className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div data-bs-interval="1000" className="carousel-item active">
                <img style={{ width: '170px', height: '300px' }} src={gehr} />
              </div>
              <div className="carousel-item">
                <img style={{ width: '170px', height: '300px' }} src={gehr_1} />
              </div>
            </div>
          </div>
          <h2>Gehrman</h2>
          <p>
            Gehrman, o Primeiro Caçador, é uma das figuras mais complexas e
            sombrias de Bloodborne. Como mentor silencioso e atormentado, ele
            acolhe o jogador no Sonho do Caçador, oferecendo orientação para
            enfrentar os horrores de Yharnam e seus monstros. Gehrman é um homem
            de aparência frágil, idoso
          </p>
        </div>
      </Friend>
      <Footer />
    </div>
  )
}

export default Friendly

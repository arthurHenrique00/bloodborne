import { useState } from 'react'
import { Hero } from './style'
import aboutHome from '../../bloodborne_img/hunter.webp'
import heroBanner from '../../bloodborne_img/home_hero.png'
import ps5Black from '../../bloodborne_img/ps5_black.png'
import ps5White from '../../bloodborne_img/ps5_white.jpg'
import ps4Black from '../../bloodborne_img/ps4_black.jpg'
import ps4White from '../../bloodborne_img/ps4_white.jpg'
import gehrman from '../../bloodborne_img/gehrman.png'
import bloodLogo from '../../bloodborne_img/bloodborne.jpg'
import fromLogo from '../../bloodborne_img/fromsoftware.webp'

const Home = () => {
  const [ps5, setPs5] = useState(ps5Black)
  const [ps4, setPs4] = useState(ps4Black)

  return (
    <>
      <Hero
        style={{
          backgroundImage: `url(${heroBanner})`
        }}
      >
        <div>
          <h2>Informações sobre o jogo</h2>
          <p>
            * Bloodborne chega ao PS5 trazendo a icônica experiência sombria de
            Yharnam com gráficos aprimorados e tempos de carregamento quase
            inexistentes. *
          </p>
          <div className="logos">
            <img src={bloodLogo} />
            <img src={fromLogo} />
          </div>
          <a href="https://www.playstation.com/pt-br/games/bloodborne/">
            <img
              src={ps5}
              onMouseOver={() => setPs5(ps5White)}
              onMouseOut={() => setPs5(ps5Black)}
            />
          </a>
          <a href="https://www.playstation.com/pt-br/games/bloodborne/">
            <img
              src={ps4}
              onMouseOver={() => setPs4(ps4White)}
              onMouseOut={() => setPs4(ps4Black)}
            />
          </a>
        </div>
        <img src={aboutHome} />
      </Hero>
      <div>
        <ul></ul>
      </div>
    </>
  )
}

export default Home

import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Characters, Hero, Inspiraction, Weapons } from './style'
import aboutHome from '../../bloodborne_img/hunter.webp'
import heroBanner from '../../bloodborne_img/home_hero.png'
import ps5Black from '../../bloodborne_img/ps5_black.png'
import ps5White from '../../bloodborne_img/ps5_white.jpg'
import ps4Black from '../../bloodborne_img/ps4_black.jpg'
import ps4White from '../../bloodborne_img/ps4_white.jpg'
import guts from '../../bloodborne_img/berserk.png'
import cosmic from '../../bloodborne_img/cosmic.png'
import fet from '../../bloodborne_img/fetus.png'
import mbrain from '../../bloodborne_img/motherbrain.jpg'
import moz from '../../bloodborne_img/mozgus.jpg'
import servant from '../../bloodborne_img/servant.jpg'
import bbIcon from '../../bloodborne_img/bb_icon.png'
import sacr from '../../bloodborne_img/sacrifice.jpg'
import hpL from '../../bloodborne_img/hp.webp'
import ebr from '../../bloodborne_img/ebrietas.png'
import cth from '../../bloodborne_img/cthulhu.jpg'
import rm from '../../bloodborne_img/rom.jpg'
import aza from '../../bloodborne_img/aza.jpg'
import friendly from '../../bloodborne_img/friendly.jpg'
import enemy from '../../bloodborne_img/enemy.jpg'
import weapons from '../../bloodborne_img/weapons_1.png'
import weapons_1 from '../../bloodborne_img/weapon.gif'

const Home = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  const [ps5, setPs5] = useState(ps5Black)
  const [ps4, setPs4] = useState(ps4Black)

  const [motherbrain, setMBrain] = useState(mbrain)
  const [mozgus, setMozgus] = useState(servant)
  const [blood, setBlood] = useState(bbIcon)
  const [ebrietas, setEbrietas] = useState(ebr)
  const [rom, setRom] = useState(rm)
  const [wea, setWea] = useState(weapons)

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
          <iframe
            width="360"
            height="215"
            src="https://www.youtube.com/embed/G203e1HhixY?si=X8XOv0Lca5pB9fHa"
          />
          <div>
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
        </div>
        <img src={aboutHome} />
      </Hero>
      <section id="inspiraction">
        <Inspiraction>
          <h2
            style={{
              textAlign: 'center',
              fontFamily: 'tangerine',
              marginBottom: '120px',
              fontSize: '64px'
            }}
          >
            Inspirações
          </h2>
          <div className="berserk" data-aos="fade-left">
            <div className="text-inpiraction">
              <h2>Berserk</h2>
              <p>
                Bloodborne foi fortemente influenciado pelo mangá Berserk, de
                Kentaro Miura, especialmente em sua atmosfera sombria, estética
                gótica e temas de horror e desesperança. Ambos compartilham um
                universo onde o humano luta contra forças sobrenaturais e
                inevitáveis, em cenários marcados por uma corrupção latente e um
                pessimismo visceral. Os monstros grotescos, os cenários
                desolados e a presença constante da loucura em Bloodborne
                lembram os horrores cósmicos e infernais que Guts enfrenta em
                Berserk. A armadura do Caçador e até certas armas, como a
                Greatsword e a Saw Cleaver, trazem um pouco da brutalidade das
                armas de Guts, e o mundo de Yharnam, com seu desespero e
                criaturas amaldiçoadas, ecoa a crueldade de um mundo em que
                monstros são humanos e deuses são cruéis. Em última análise,
                Bloodborne presta homenagem a Berserk ao traduzir seus temas de
                luta e escuridão para um formato interativo, permitindo que os
                jogadores experimentem um pouco da jornada angustiante e heroica
                que Miura concebeu para seu protagonista.
              </p>
              <div data-aos="fade-down" className="references">
                <h2>Referências</h2>
                <div>
                  <img
                    src={motherbrain}
                    onMouseOver={() => {
                      setMBrain(fet)
                    }}
                    onMouseOut={() => {
                      setMBrain(mbrain)
                    }}
                  />
                  <img
                    src={mozgus}
                    onMouseOver={() => {
                      setMozgus(moz)
                    }}
                    onMouseOut={() => {
                      setMozgus(servant)
                    }}
                  />
                  <img
                    src={blood}
                    onMouseOver={() => {
                      setBlood(sacr)
                    }}
                    onMouseOut={() => {
                      setBlood(bbIcon)
                    }}
                  />
                </div>
              </div>
            </div>
            <img src={guts} />
          </div>
          <div className="cosmic-horror" data-aos="fade-right">
            <img src={cosmic} />
            <div className="text-inpiraction">
              <h2>Horror cósmico e H.P Lovecraft</h2>
              <p>
                O horror cósmico e a obra de H.P. Lovecraft exercem uma
                influência profunda sobre o jogo Bloodborne, desenvolvido pela
                FromSoftware. Assim como nos contos de Lovecraft, Bloodborne
                explora temas de medo do desconhecido, loucura e insignificância
                humana frente a forças incompreensíveis e entidades cósmicas. Em
                vez de vilões típicos, os antagonistas do jogo são horrores
                sobrenaturais e seres antigos, incompreensíveis pela mente
                humana, que levam os personagens ao limite da sanidade. A
                ambientação sombria e gótica de Yharnam, a cidade onde o jogo se
                passa, é permeada por mistérios e criaturas grotescas que
                parecem existir em uma linha tênue entre pesadelos e realidade.
                O conceito de uma antiga verdade ou conhecimento proibid
                presente nos grandes contos de Lovecraft é central ao enredo de
                Bloodborne: quanto mais o jogador desvenda a história do mundo e
                se aproxima do conhecimento oculto, mais perturbador e surreal
                se torna o ambiente, levando-o a enfrentar criaturas monstruosas
                e aberrações cósmicas. No jogo, o nível de insight, uma mecânica
                que representa o entendimento e a percepção do personagem sobre
                o mundo, revela uma conexão direta com a obra de Lovecraft, onde
                o conhecimento é uma faca de dois gumes, tanto uma revelação
                quanto um caminho para a loucura.
              </p>
              <div data-aos="fade-down" className="references">
                <h2>Referências</h2>
                <div>
                  <div className="refExpl">
                    <img
                      src={rom}
                      onMouseOver={() => {
                        setRom(aza)
                      }}
                      onMouseOut={() => {
                        setRom(rm)
                      }}
                    />
                  </div>
                  <div className="refExpl">
                    <img
                      src={ebrietas}
                      onMouseOver={() => {
                        setEbrietas(cth)
                      }}
                      onMouseOut={() => {
                        setEbrietas(ebr)
                      }}
                    />
                  </div>
                  <div className="refExpl">
                    <img src={hpL} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Inspiraction>
      </section>
      <section id="char">
        <h2
          style={{
            textAlign: 'center',
            fontFamily: 'tangerine',
            marginBottom: '120px',
            marginTop: '170px',
            fontSize: '64px'
          }}
        >
          Personagens
        </h2>
        <Characters>
          <div className="friends" data-aos="fade-right">
            <a href="/friendly">
              <img src={friendly} />
            </a>
          </div>
          <div className="boss" data-aos="fade-left">
            <a href="/enemy">
              <img src={enemy} />
            </a>
          </div>
        </Characters>
      </section>
      <Weapons id="weapon">
        <h2>Armas</h2>
        <div data-aos="fade-down">
          <a href="/weapons">
            <img
              src={wea}
              onMouseOver={() => {
                setWea(weapons_1)
              }}
              onMouseOut={() => {
                setWea(weapons)
              }}
            />
          </a>
        </div>
      </Weapons>
    </>
  )
}

export default Home

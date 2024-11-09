import { WeaponsSome } from './style'
import Footer from '../../Footer'
import HeaderT from '../../HeaderSec'
import boom from '../../../bloodborne_img/boom_hammer.jpg'
import a_arm from '../../../bloodborne_img/amygadala_arm.webp'
import evelyn from '../../../bloodborne_img/evelyn_pistol.webp'
import gas_axe from '../../../bloodborne_img/gascoigne_axe.webp'
import rakuyu from '../../../bloodborne_img/rakuyo.jpg'
import lud_pistol from '../../../bloodborne_img/ludwig_rifle.webp'
import kirk_hamm from '../../../bloodborne_img/kirkhammer.jpg'
import kos from '../../../bloodborne_img/kos_parasite.webp'
import ge_foice from '../../../bloodborne_img/gehrman_blade.webp'
import lo_foice from '../../../bloodborne_img/logarius_scythe.jpg'
import holy_blade from '../../../bloodborne_img/ludwig_holy_blade.jpg'
import moonlight_blade from '../../../bloodborne_img/holy_moonlight.jpg'
import weapon_banner from '../../../bloodborne_img/weapon_gif.gif'
import weapon_boss from '../../../bloodborne_img/boss_weapon.gif'
import weapon_pvp from '../../../bloodborne_img/pvp_weapons.gif'
import border from '../../../bloodborne_img/border.png'
import tronitrus from '../../../bloodborne_img/tronitrus.jpeg'
import pistol_init from '../../../bloodborne_img/gascoigne_pistol.webp'
import init_chain from '../../../bloodborne_img/weapon_init.webp'

import saw_cleave from '../../../bloodborne_img/Saw_Cleaver.webp'
import saw_spear from '../../../bloodborne_img/saw_spear.jpg'

const Weapons = () => (
  <div style={{ backgroundColor: 'black' }}>
    <HeaderT />
    <WeaponsSome>
      <div className="banner_wea">
        <h2>Armas dos Chefes</h2>
        <img src={weapon_boss} />
        <div style={{ textAlign: 'center' }}>
          <img src={border} style={{}} />
        </div>
      </div>
      <div className="container">
        <div className="card">
          <img src={rakuyu} />
        </div>
        <div className="card">
          <img src={moonlight_blade} />
        </div>
        <div className="card">
          <img src={kos} />
        </div>
        <div className="card">
          <img src={lo_foice} />
        </div>
        <div className="card">
          <img src={ge_foice} />
        </div>
        <div className="card">
          <img src={a_arm} />
        </div>
      </div>
      <div className="banner_wea">
        <h2>Armas mais usadas no PVP</h2>
        <img src={weapon_pvp} />
        <div style={{ textAlign: 'center' }}>
          <img src={border} style={{}} />
        </div>
      </div>
      <div className="container">
        <div className="card">
          <img src={boom} />
        </div>
        <div className="card">
          <img src={kirk_hamm} />
        </div>
        <div className="card">
          <img src={lud_pistol} />
        </div>
        <div className="card">
          <img src={evelyn} />
        </div>
        <div className="card">
          <img src={holy_blade} />
        </div>
        <div className="card">
          <img src={tronitrus} />
        </div>
      </div>
      <div className="banner_wea">
        <h2>Armas Iniciais</h2>
        <img src={weapon_banner} />
        <div style={{ textAlign: 'center' }}>
          <img src={border} style={{}} />
        </div>
      </div>
      <div className="container">
        <div className="card">
          <img src={gas_axe} />
        </div>
        <div className="card">
          <img src={holy_blade} />
        </div>
        <div className="card">
          <img src={saw_cleave} />
        </div>
        <div className="card">
          <img src={saw_spear} />
        </div>
        <div className="card">
          <img src={pistol_init} />
        </div>
        <div className="card">
          <img src={init_chain} />
        </div>
      </div>
    </WeaponsSome>
    <Footer />
  </div>
)

export default Weapons

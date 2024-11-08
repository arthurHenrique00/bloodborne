import icon from '../../bloodborne_img/bb_icon.png'
import { HeaderS } from './style'
import headerbg from '../../bloodborne_img/headerBG.jpg'

const Header = () => (
  <HeaderS
    style={{
      backgroundImage: `url(${headerbg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
  >
    <a href="/">
      <img src={icon} />
    </a>
    <ul>
      <li>
        <a href="#inspiraction">Inspirações</a>
      </li>
      <li>
        <a href="#char">NPC &apos; S</a>
      </li>

      <li>
        <a href="#weapon">Armas</a>
      </li>
    </ul>
  </HeaderS>
)

export default Header

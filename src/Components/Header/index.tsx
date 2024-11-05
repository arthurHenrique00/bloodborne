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
        <a href="">Home</a>
      </li>
      <li>
        <a href="">Inspirações</a>
      </li>
      <li>
        <a href="">NPC &apos; S</a>
      </li>
    </ul>
  </HeaderS>
)

export default Header

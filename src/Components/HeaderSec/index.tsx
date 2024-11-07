import icon from '../../bloodborne_img/bloodborne.png'
import headerbg from '../../bloodborne_img/headerBG.jpg'
import { Headerts } from './style'

const HeaderT = () => (
  <Headerts
    style={{
      backgroundImage: `url(${headerbg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
  >
    <div>
      <a href="/">
        <img src={icon} />
      </a>
    </div>
  </Headerts>
)

export default HeaderT

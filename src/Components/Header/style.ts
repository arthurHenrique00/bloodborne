import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderS = styled.header`
  background-color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 40px;
    height: 40px;
    margin: 20px 26px;
    border-radius: 50%;
  }

  ul {
    display: flex;
  }

  li {
    margin-right: 64px;
    list-style: none;
  }

  a {
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    color: ${colors.white};
    font-family: tangerine;
  }
`

import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderS = styled.header`
  background-color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 9px;

  img {
    width: 50px;
    height: 50px;
    margin: 26px 26px;
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
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
  }
`

import styled from 'styled-components'
import { colors } from '../../../styles'

export const Friend = styled.section`
  padding: 0 300px;
  text-align: center;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 64px;
  row-gap: 120px;

  .friends {
    width: 300px;

    h2 {
      font-family: tangerine;
      color: white;
      font-size: 36px;
    }

    p {
      color: ${colors.white};
      border: 1px solid white;
      border-radius: 3px;
      padding: 6px;
      height: 210px;
      max-height: 100%;
    }
  }
`

export const Banner = styled.div`
  padding-top: 64px;
  padding-bottom: 120px;
  text-align: center;

  div {
    position: relative;
    display: inline-block;

    img {
      width: 800px;
      height: 400px;
      filter: brightness(50%);
      border-radius: 9px;
    }

    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      h2 {
        font-family: tangerine;
        color: white;
        font-size: 52px;
        padding-top: 32px;
        padding-bottom: 32px;
      }

      p {
        color: white;
        width: 400px;
        font-size: 14px;
        line-height: 28px;
      }
    }
  }
`

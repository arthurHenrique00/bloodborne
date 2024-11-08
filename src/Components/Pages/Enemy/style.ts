import styled from 'styled-components'
import { colors } from '../../../styles'

export const EnemyCarousel = styled.div`
  margin: 80px 300px;
  display: flex;
  width: 1000px;

  text-align: center;
  font-family: ;
  font-size: 64px;

  div,
  img {
    height: 600px;
    filter: brightness(70%);
    border-radius: 9px;
    margin-right: 12px;
  }

  .bossCard {
    flex: 1;
    transition: 0.3s;

    &:hover {
      flex: 6;
      filter: brightness(110%);
    }
  }
`

export const Enemy = styled.section`
  .boss {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 300px;

    h2 {
      margin-right: 32px;
      font-family: tangerine;
      font-size: 64px;
    }

    > img {
      margin-right: 64px;
    }
  }

  .weapons {
    display: grid;
    grid-template-columns: 50px 50px 50px;
    gap: 26px;
    border: 2px solid ${colors.white};
    padding: 22px;
    border-radius: 9px;

    img {
      width: 50px;
      height: 50px;
    }
  }

  .set {
    img {
      margin-bottom: 16px;
    }
  }
`

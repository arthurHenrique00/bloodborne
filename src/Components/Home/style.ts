import styled from 'styled-components'
import { colors } from '../../styles'

export const Hero = styled.div`
  display: flex;
  padding-top: 120px;
  padding-left: 220px;
  padding-right: 100px;
  justify-content: space-between;

  h2 {
    font-family: tangerine, sans serif;
    font-size: 48px;
    margin-bottom: 42px;
  }

  p {
    width: 550px;
    line-height: 22px;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    width: 350px;
    height: 500px;
  }

  a {
    margin-right: 120px;

    img {
      margin-top: 50px;
      width: 100px;
      height: 50px;
      border-radius: 9px;
    }
  }

  .logos {
    img {
      width: 170px;
      height: 70px;
      border-radius: 9px;
      margin-right: 50px;
      margin-top: 100px;

      &:hover {
        cursor: pointer;
      }
    }
  }
`

export const Inspiraction = styled.div`
  padding-top: 60px;

  .berserk {
    display: flex;
    margin-bottom: 160px;
    padding-left: 150px;

    img {
      width: 500px;
      height: 500px;
    }
  }

  .cosmic-horror {
    display: flex;

    img {
      width: 500px;
      height: 500px;
      margin-left: 25px;
    }
  }

  .text-inpiraction {
    h2 {
      text-align: center;
      font-family: tangerine;
      font-size: 48px;
      margin-bottom: 32px;
    }

    p {
      width: 900px;
    }
  }

  .references {
    img {
      width: 150px;
      height: 150px;
      border: 1px solid ${colors.white};
      padding: 4px;
      border-radius: 9px;
      margin-left: 120px;
      margin-top: 64px;
    }
  }
`

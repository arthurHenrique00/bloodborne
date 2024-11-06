import styled from 'styled-components'
import { colors } from '../../styles'

export const Hero = styled.div`
  display: flex;
  padding-top: 40px;
  padding-left: 220px;
  padding-right: 100px;
  justify-content: space-between;

  img {
    width: 350px;
    height: 500px;
  }

  h2 {
    font-family: tangerine, sans serif;
    font-size: 48px;
    margin-bottom: 42px;
  }

  p {
    width: 550px;
    line-height: 22px;
    padding-bottom: 25px;

    &:hover {
      text-decoration: underline;
    }
  }

  a {
    margin-right: 120px;

    img {
      margin-top: 20px;
      width: 100px;
      height: 50px;
      border-radius: 9px;
      margin-bottom: 20px;
    }
  }

  iframe {
    border-radius: 9px;
  }
`

export const Inspiraction = styled.div`
  padding-top: 22px;

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


.references {
      div {
      display: flex;
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
      }
`

export const Characters = styled.div`
  display: flex;
  margin-bottom: 100px;
  height: 300px;
  padding: 0 300px;

  div {
    a {
      margin-right: 24px;

      img {
        text-align: center;
        filter: grayscale(0.9) blur(2px);
        border-radius: 9px;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
`

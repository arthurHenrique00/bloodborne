import styled from 'styled-components'

export const Hero = styled.div`
  display: flex;
  padding-top: 120px;
  padding-left: 220px;
  padding-right: 220px;
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
    width: 300px;
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

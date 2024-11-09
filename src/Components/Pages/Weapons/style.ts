import styled from 'styled-components'

export const WeaponsSome = styled.section`
  .banner_wea {
    text-align: center;
    padding: 120px 0;

    h2 {
      font-family: tangerine;
      font-size: 64px;
      margin-bottom: 24px;
      color: white;
    }

    > img {
      width: 600px;
      height: 300px;
      border-radius: 9px;
    }
  }

  .container {
    display: flex;
    margin-bottom: 150px;
    justify-content: center;
    align-items: center;

    .card {
      width: 150px;
      height: 150px;

      box-shadow: -20px 20px 20px black;

      &:not(:first-child) {
        margin-left: -50px;
      }

      &:hover {
        transform: translateY(-25px);
      }

      &:hover ~ .card {
        left: 50px;
      }
    }
  }
`

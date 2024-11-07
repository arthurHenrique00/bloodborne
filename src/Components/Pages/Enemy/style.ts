import styled from 'styled-components'

export const Enemy = styled.div`
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

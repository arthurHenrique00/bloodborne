import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#000',
  white: '#fff'
}

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding:0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
      overflow-x: hidden;
    }

    body {
      background-color: ${colors.black};
      color: ${colors.white};
    }
`
export default GlobalStyle

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`

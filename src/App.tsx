import Header from './Components/Header'
import Home from './Components/Home'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import GlobalStyle from './styles'
import Friendly from './Components/Pages/Friendly'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
      </>
    )
  },
  {
    path: '/friendly',
    element: <Friendly />
  }
])

function App() {
  return <RouterProvider router={rotas} />
}

export default App

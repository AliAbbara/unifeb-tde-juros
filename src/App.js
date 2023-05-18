import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import JurosCompostos from './pages/JurosCompostos'
import CapitalPrincipal from './pages/CapitalPrincipal'
import TaxaUnitaria from './pages/TaxaUnitaria'
import Periodo from './pages/Periodo'
import Conversao from './pages/Conversao'
import TaxaEfetiva from './pages/TaxaEfetiva'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/juros-compostos' element={<JurosCompostos />} />
        <Route path='/capital-principal' element={<CapitalPrincipal />} />
        <Route path='/taxa-unitaria' element={<TaxaUnitaria />} />
        <Route path='/periodo' element={<Periodo />} />
        <Route path='/conversao' element={<Conversao />} />
        <Route path='/taxa-efetiva' element={<TaxaEfetiva />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

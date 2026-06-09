import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import HeadRefacerDetail from './pages/HeadRefacerDetail'
import HydraulicPressDetail from './pages/HydraulicPressDetail'
import HydraulicHoningDetail from './pages/HydraulicHoningDetail'
import CrankshaftGrindingDetail from './pages/CrankshaftGrindingDetail'
import RodBoringDetail from './pages/RodBoringDetail'

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/head-refacer" element={<HeadRefacerDetail />} />
            <Route path="/products/hydraulic-press" element={<HydraulicPressDetail />} />
            <Route path="/products/hydraulic-honing" element={<HydraulicHoningDetail />} />
            <Route path="/products/crankshaft-grinding" element={<CrankshaftGrindingDetail />} />
            <Route path="/products/rod-boring" element={<RodBoringDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App

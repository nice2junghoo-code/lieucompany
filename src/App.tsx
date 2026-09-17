import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import News from './pages/News'
import Service from './pages/Service'
import Showroom from './pages/Showroom'
import Purchase from './pages/Purchase'
import Admin from './pages/Admin'
import AdminLogin from './pages/AdminLogin'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/news" element={<News />} />
        <Route path="/service" element={<Service />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App

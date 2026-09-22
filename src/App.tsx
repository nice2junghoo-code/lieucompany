import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Service from './pages/Service'
import DemoRequest from './pages/DemoRequest'
import AsService from './pages/AsService'
import Showroom from './pages/Showroom'
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
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service/demo" element={<DemoRequest />} />
        <Route path="/service/as" element={<AsService />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App

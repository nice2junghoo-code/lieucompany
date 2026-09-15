import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import News from './pages/News'
import Service from './pages/Service'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/news" element={<News />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  )
}

export default App

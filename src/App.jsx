import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Packages from "./pages/Packages"
import PackageDetail from "./pages/PackageDetail"
import Tests from "./pages/Tests"
import Doctors from "./pages/Doctors"
import Specialties from "./pages/Specialties"
import Hospitals from "./pages/Hospitals"
import Corporate from "./pages/Corporate"
import Radiology from "./pages/Radiology"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Faq from "./pages/Faq"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetail />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/radiology" element={<Radiology />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

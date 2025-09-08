import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landingpage from './components/Landingpage'
import About from './components/About'
import Material from './components/Material'
import Chooseus from './components/Chooseus'
import FAQs from './components/FAQs'
import Products from './components/Products'
import Contact from './components/Contact'
import Flanges from './components/Flanges'
import Flatbars from './components/Flatbars'
import PipesTubes from './components/PipesTubes'
import CoilStrips from './components/CoilStrips'
import RodsBars from './components/RodsBars'
import Fastners from './components/Fastners'
import ButtWeldFit from './components/ButtWeldFit'
import WireFillers from './components/WireFillers'
import SheetPlate from './components/SheetPlate'



const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div> <Navbar /> <Landingpage/> <About/> <Products/> <Chooseus/> <Material/> <FAQs/> <Footer/> </div>
    },
    {
      path:"/about",
      element: <div> <Navbar/> <About/> <Footer/> </div>
    },
    {
      path: "/contact",
      element: <div> <Navbar/> <Contact/> <Footer/> </div>
    },
    {
      path: "/flanges",
      element: <div> <Navbar/> <Flanges/> <Footer/> </div>
    },
    {
      path: "/flatbars",
      element: <div> <Navbar/> <Flatbars/> <Footer/> </div>
    },
    {
      path: "/pipestubes",
      element: <div> <Navbar/> <PipesTubes/> <Footer/> </div>
    },
    {
      path: "/coilstrips",
      element: <div> <Navbar/> <CoilStrips/> <Footer/> </div>
    },
    {
      path: "/rodsbars",
      element: <div> <Navbar/> <RodsBars/> <Footer/> </div>
    },
    {
      path: "/fastners",
      element: <div> <Navbar/> <Fastners/> <Footer/> </div>
    },
    {
      path: "/buttweldfit",
      element: <div> <Navbar/> <ButtWeldFit/> <Footer/> </div>
    },
    {
      path: "/wirefillers",
      element: <div> <Navbar/> <WireFillers/> <Footer/> </div>
    },
    {
      path: "/sheetplate",
      element: <div> <Navbar/> <SheetPlate/> <Footer/> </div>
    },
    {
      path: "/materials",
      element: <div> <Navbar/> <Material/> <Footer/> </div>
    }
  ]
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

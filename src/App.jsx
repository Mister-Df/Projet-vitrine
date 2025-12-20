import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./component/navbar/Navbar"
import Hautbar from "./component/navbar/Hautbar"


export default function App() {
  return (
    <BrowserRouter>
      <Hautbar />
      <Navbar />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

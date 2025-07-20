import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './home_componets/nav'
import Home from './home_componets/Home'
import './App.css'
// import AuthPage from './doctors components/AuthPage'
import DoctorDashboard from './doctors components/DoctorDashboard'
import Cart from "./CartComponet/Cart";
import Appoinment from "./Appoinment component/Appoinment";

function App() {


  return (
    <>
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="home/appoinment" element={<Appoinment/>}/>
        {/* <Route path="/admin" element={<Home/>}/> */}
        <Route path="/DoctorPannel" element={<DoctorDashboard/>}/>
        <Route path="home/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

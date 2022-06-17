import React from 'react'
import Home from "./Pages/Home/Home";
import Eth from "./Pages/Home/Eth";
import Category from "./Pages/Category/Category";
import BeautyBar from "./Pages/BeautyBar/BeautyBar"
import Treatment from "./Pages/Treatment/Treatment"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import UserProfile from "./Pages/User/UserProfile"
import Booking from "./Components/Booking/Booking"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import IndexBooking from './Pages/Booking/IndexBooking';

function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        <Route path="/eth" element={<Eth />} />
        {/* Auth Pages */}
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/user/profile" element={<UserProfile />} />
        {/* Category */}
        <Route path="/categories/:id" element={<Category />} /> 
        {/* Treatment & booking */}
        <Route path="/booking/:id" element={<Booking />} /> 
        <Route path="/treatment/:id" element={<Treatment />} /> 
        <Route path="/treatment/booking/:id" element={<IndexBooking />} /> 
        {/* BeautyBar */}
        <Route path="/beautybar/:id" element={<BeautyBar />} /> 
      </Routes>
    </Router>
    </div>                                                                                                                        
  );
}

export default App;

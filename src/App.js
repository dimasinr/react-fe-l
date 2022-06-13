import React from 'react'
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import BeautyBar from "./Pages/BeautyBar/BeautyBar"
import Treatment from "./Pages/Treatment/Treatment"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
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
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/categories/:id" element={<Category />} /> 
        <Route path="/treatment/:id" element={<Treatment />} /> 
        <Route path="/treatment/booking/:id" element={<IndexBooking />} /> 
        <Route path="/beautybar/:id" element={<BeautyBar />} /> 
      </Routes>
    </Router>
    </div>                                                                                                                        
  );
}

export default App;

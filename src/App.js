import React from 'react'
import Home from "./Pages/Home/Home";
import BeautyBarPages from "./Pages/BeautyBarPages/BeautyBarPages"
import TreatmentPages from "./Pages/TreatmentPages/TreatmentPages"
import CategoryPages from "./Pages/CategoryPages/CategoryPages"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import UserProfile from "./Pages/User/UserProfile"
import Pages404 from "./../src/Components/PageNotFound/pages404"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext';

function App() {

const { user } = useContext(AuthContext);


  return (
    <div className="App">
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* Auth Pages */}
        {!user && (<Route path="/login" element={<Login />} />)}
        <Route path="/register" element={<Register />} /> 
        {/* User Pages */}
        <Route path="/user/profile" element={<UserProfile />} />
        {/* Category */}
        <Route path="/categories/:id" element={<CategoryPages />} /> 
        {/* Treatment & booking */}
        <Route path="/treatment/:id" element={<TreatmentPages />} /> 
        {/* BeautyBar */}
        <Route path="/beautybar/:id" element={<BeautyBarPages />} />
        {/* <Route path="/treatment/:id" element={<BeautyBar />} />   All Treatment */}
          <Route path="*" element={<Pages404 />} />
      </Routes>
    </Router>
    </div>                                                                                                                        
  );
}

export default App;

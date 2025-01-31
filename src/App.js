import React from 'react';
import Footer from './Components/Footer/Footer'
import Products from './Pages/Home'
import MensClothing from './Pages/MensClothing'
import WomensClothing from './Pages/WomensClothing'
import Electronics from './Pages/Electronics'
import Jewelery from './Pages/Jewelery'
import Login from './Pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
<div style={{ display: 'flex', flexDirection: 'column' }}>
<Router>
      <Routes>
        <Route path="/home" element={<Products />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/mensclothing" element={<MensClothing />} />
        <Route path="/womensclothing" element={<WomensClothing />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/" element={<Login/>}/>
      </Routes>
    <Footer/>
    </Router>
  </div>
);

export default App;
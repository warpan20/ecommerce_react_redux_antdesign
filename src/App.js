import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Products from './Pages/Home'

const App = () => (
<div style={{ display: 'flex', flexDirection: 'column' }}>
    <Header/>
    <Products />
    <Footer/>
  </div>
);

export default App;
import React from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greetings="Bienvenido" />
    </>
  );
}

export default App;

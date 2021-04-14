import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Card from './components/Card'
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  );
}

export default App

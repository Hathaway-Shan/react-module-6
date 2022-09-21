import React from 'react';
import './App.css';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';

function App() {
  return (
    <section className='main'>
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App(): React.ReactElement {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;

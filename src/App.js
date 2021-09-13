import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';

function App() {
  return (
  <React.Fragment>
    <Header />
    <main>
    <div className="botonVerMas">
    <button type="button">Cargar más tarjetas</button>
    </div>
    <section className='card-container'>
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    </section>
    </main>
    <Footer />
  </React.Fragment>
  );
}

export default App;

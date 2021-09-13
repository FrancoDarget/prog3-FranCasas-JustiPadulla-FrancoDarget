import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Articles from './components/Articles/Articles';

function App() {
  return (
  <React.Fragment>
    <Header />
    <main>
    <div className="botonVerMas">
    <button type="button">Cargar más tarjetas</button>
    </div>
    <section>
    <Articles />
    </section>
    </main>
    <Footer />
  </React.Fragment>
  );
}

export default App;

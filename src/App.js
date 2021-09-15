import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Articles from './components/Articles/Articles';

function App() {
  return (
  <React.Fragment>
    <Header />
    <div className='hero'>
      <h1>The Lasrgest Streaming Library<br/>in Latin America</h1>
      <div className='scrolling'>
      <p>Scroll for more</p>
      <br/><br/><br/>
      <a class="uk-button uk-button-primary"  href="#postal" offset='100' uk-scroll><img src="/assets/img/downarrow.png" alt=""/></a>
      </div>
    </div>
    <main id="postal">
    <section>
    <Articles />
    </section>
    </main>
    <Footer />
  </React.Fragment>
  );
}

export default App;

// import { Helmet } from 'react-helmet';
import '../src/styles/partials/_global.scss';
import Header from './components/Header/Header';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
  
    </div>
  );
}

export default App;

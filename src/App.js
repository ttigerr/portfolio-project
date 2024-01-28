// import logo from './logo.svg';
import './App.css';

// import all the component files
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import { Contact } from './Components/Contact';
import Skills from './Components/Skills';
import { Work } from './Components/Work';

// main app
function App() {
  return (
    <div className="App"> 
      <Header />
      <Home />
      <About />
      <Contact />
      <Skills />
      <Work />
    </div>
  );
}

export default App;

import react from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Skill from './components/Skill';
function App() {


  return (
    <div className="App">
      <Home/>
     <About/>
     <Skill/>
    </div>
  )
}

export default App

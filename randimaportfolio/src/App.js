 
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';

function App() {
  return (
     <div>
       
       <NavBar/>
       <Home/>
       <About/>


       <Projects/>
       <SocialLinks/>
     </div>
  );
}

export default App;

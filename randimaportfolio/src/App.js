 
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Myprojects from './components/Myprojects';
import Pro from './components/pro';
import Skills from './components/Skills';

function App() {
  return (
     <div>
       
       <NavBar/>
       <Home/>
       <About/>
          <Skills/>
   <Projects/>   
       <SocialLinks/>
         {/* <Pro/> */}
          {/* <Myprojects/>    */}
        <Contact/>  
       <Footer/>
     </div>
  );
}

export default App;

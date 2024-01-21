import frontimage from './Assets/images/frontimage.jpg'
import './App.css';
import { About, Contact, Home } from './Pages';
import { Navbars } from './Components/navbar';
import { Footer } from './Components';



function App() {
  return (
    <div className="App">
      <Navbars/>
    
      <Home/>
      <About />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

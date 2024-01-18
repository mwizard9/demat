import frontimage from './Assets/images/frontimage.jpg'
import './App.css';
import { Home } from './Pages';
import { Navbars } from './Components/navbar';
import { About } from './Pages/About';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
    </div>
  );
}

export default App;

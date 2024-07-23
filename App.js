import About from './About';
import './App.css';
import BasicClass from './Components/BasicClass';
import Contact from './Port.js/Contact';
import Exp from './Port.js/Exp';
import Header from './Port.js/Header';
import Home from './Port.js/Home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Routing from './Port.js/Routing';

function App() {
  return(
    <div className="nApp">
       <Header/>
       <Routing/>
    </div>
  );
}

export default App;

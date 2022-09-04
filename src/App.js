import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "../src/components/Home/home"
import NavbarNav from './components/Home/Navbar';
import Sidebar from './components/Home/Sidebar';
import Unidad1 from './components/Content/Unidad1'
import Unidad2 from './components/Content/Unidad2'
import Unidad3 from './components/Content/Unidad3'
import Unidad4 from './components/Content/Unidad4'
import Unidad5 from './components/Content/Unidad5'
import Login from './components/Login/Login';


import './App.scss';

function App() {
  return (
      <Router className="App">
        <Routes>
            <Route path="/" element={<Login/>}/>
              <Route path="/unidad1" element={<Home page={<Unidad1/>}/>}/>
              <Route path="/unidad2" element={<Home page={<Unidad2/>}/>}/>
              <Route path="/unidad3" element={<Home page={<Unidad3/>}/>}/>
              <Route path="/unidad4" element={<Home page={<Unidad4/>}/>}/>
              <Route path="/unidad5" element={<Home page={<Unidad5/>}/>}/>
        </Routes>
      </Router>
  );
}

export default App;

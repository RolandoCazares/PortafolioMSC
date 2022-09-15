import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "../src/components/Home/home"
import Tarea1 from './components/Content/Unidad1/Tarea1/Tarea1.js'
import Tarea2 from './components/Content/Unidad1/Tarea2/Tarea2.js'
import Unidad2 from './components/Content/Unidad2'
import Unidad3 from './components/Content/Unidad3'
import Unidad4 from './components/Content/Unidad4'
import Unidad5 from './components/Content/Unidad5'
import Login from './components/Login/Login';
import HomeInit from './components/Init/HomeInit';


import './App.scss';

function App() {
  return (
      <Router className="App">
        <Routes>
            <Route path="/" element={<Login/>}/>
              <Route path="/home" element= {<Home page={<HomeInit/>}/>}/>
              <Route path="/home/unidad1" element={<Home page={<Tarea1/>}/>}/>
              <Route path="/home/unidad11" element={<Home page={<Tarea2/>}/>}/>
              <Route path="/home/unidad3" element={<Home page={<Unidad3/>}/>}/>
              <Route path="/home/unidad4" element={<Home page={<Unidad4/>}/>}/>
              <Route path="/home/unidad5" element={<Home page={<Unidad5/>}/>}/>

        </Routes>
      </Router>
  );
}

export default App;

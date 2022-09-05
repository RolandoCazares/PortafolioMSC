import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "../src/components/Home/home"
import Unidad1 from './components/Content/Unidad1'
import Unidad2 from './components/Content/Unidad2'
import Unidad3 from './components/Content/Unidad3'
import Unidad4 from './components/Content/Unidad4'
import Unidad5 from './components/Content/Unidad5'
import Login from './components/Login/Login';
import Inicio from './components/Init/Init';
import HomeInit from './components/Init/HomeInit';


import './App.scss';

function App() {
  return (
      <Router className="App">
        <Routes>
            <Route path="/" element={<Login/>}/>
              <Route path="/home" element= {<HomeInit page={<Inicio/>}/>}>
              <Route path="/home/unidad1" element={<Home page={<Unidad1/>}/>}/>
              <Route path="/home/unidad2" element={<Home page={<Unidad2/>}/>}/>
              <Route path="/home/unidad3" element={<Home page={<Unidad3/>}/>}/>
              <Route path="/home/unidad4" element={<Home page={<Unidad4/>}/>}/>
              <Route path="/home/unidad5" element={<Home page={<Unidad5/>}/>}/>
              </Route>
        </Routes>
      </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavbarNav from './components/Navbar';
import Sidebar from './components/Sidebar';
import Unidad1 from './components/Content/Unidad1'
import Unidad2 from './components/Content/Unidad2'
import Unidad3 from './components/Content/Unidad3'
import Unidad4 from './components/Content/Unidad4'
import Unidad5 from './components/Content/Unidad5'

import './App.scss';

function App() {
  return (
      <Router className="App">
          <NavbarNav/>
            <div className='flex'>
              <Sidebar/>
                <div className='content'>
                  <Routes>
                    <Route path="/unidad1" element={<Unidad1/>}/>
                    <Route path="/unidad2" element={<Unidad2/>}/>
                    <Route path="/unidad3" element={<Unidad3/>}/>
                    <Route path="/unidad4" element={<Unidad4/>}/>
                    <Route path="/unidad5" element={<Unidad5/>}/>
                  </Routes>
                </div>
            </div>
        
      </Router>
        
    
      
  );
}

export default App;

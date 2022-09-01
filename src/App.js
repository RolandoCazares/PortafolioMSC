import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavbarNav from './components/Navbar';
import Sidebar from './components/Sidebar';
import Unidad1 from './components/Content/Unidad1'
import Unidad2 from './components/Content/Unidad2'
import Unidad3 from './components/Content/Unidad3'
import Unidad4 from './components/Content/Unidad4'
import Unidad5 from './components/Content/Unidad5'

import './App.scss';
import { Form } from 'reactstrap';

function App() {
  return (
    <Router className="App">
      <NavbarNav/>
      <div className='flex'>
        <Sidebar/>
          <div className='content'>
            <Route path="/unidad1" exact={true} component={Unidad1}/>
            <Route path="/unidad2" exact={true} component={Unidad2}/>
            <Route path="/unidad3" exact={true} component={Unidad3}/>
            <Route path="/unidad4" exact={true} component={Unidad4}/>
            <Route path="/unidad5" exact={true} component={Unidad5}/>
          </div>
      </div>
    </Router>
      
  );
}

export default App;

{/* <img src={logo} className="App-logo" alt="logo" /> */}

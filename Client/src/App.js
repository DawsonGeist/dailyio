import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import './styles.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from './Components/SideBar';
import Home from './Pages/Home';
import PlannerOverview from './Pages/PlannerOverview';

const GetPageContent = () => {
  return (
    <div className='sidebar-content-container'>
      <SideBar/>
      <Home/>
    </div>
  );
}

function App() {
  //Clear localStorage
  //localStorage.clear()
  return (
    <Routes>
      <Route path='/' element={
        <div className="App">{GetPageContent()}</div>
      }/>
      <Route path='/PlannerOverview' element={<PlannerOverview/>}/>
    </Routes>
  );
}

export default App;

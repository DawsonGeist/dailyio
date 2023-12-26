import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import './styles.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from './Components/SideBar';
import Home from './Pages/Home';
import PlannerOverview from './Pages/PlannerOverview';
import GoalsOverview from './Pages/GoalsOverview';
import CreateGoal from './Pages/CreateGoal';
import CreateTask from './Pages/CreateTask';
import CreateEvent from './Pages/CreateEvent';

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
      <Route path='/GoalsOverview' element={<GoalsOverview/>}/>
      <Route path='/CreateGoal' element={<CreateGoal/>}/>
      <Route path='/CreateTask' element={<CreateTask/>}/>
      <Route path='/CreateEvent' element={<CreateEvent/>}/>
    </Routes>
  );
}

export default App;

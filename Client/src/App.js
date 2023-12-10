import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import './styles.css'

import SideBar from './Components/SideBar';
import Home from './Pages/Home';

const GetPageContent = () => {
  const state = localStorage.getItem("state")
  if (state == null) {
    console.log("state is null")
    return (
      <div className='sidebar-content-container'>
        <SideBar/>
        <Home/>
      </div>
    );
  }
  else {
    return (
      <div className='sidebar-content-container'>
        <SideBar/>
        <p>Error Occured with state</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">{GetPageContent()}</div>
  );
}

export default App;

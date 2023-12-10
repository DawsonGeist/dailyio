import react from 'react'
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import '../styles.css'

import NotesPreviewContainer from '../Components/NotesPreviewContainer';

const Home = () => {
    return (
        <div className='page-container'>
            <h1>Home</h1>
            <p>Hello... Don't know what to add yet</p>
            <h5>Button</h5>
            <button>Press Me</button>

            <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                </a>

                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <NotesPreviewContainer/>
        </div>
    )
}

export default Home
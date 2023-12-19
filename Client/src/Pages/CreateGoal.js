import react from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import '../styles.css'
import SideBar from '../Components/SideBar';

const onClick = (event, title, description) => {
    event.preventDefault()
    console.log("Title:")
    console.log(title)
    console.log("Description:")
    console.log(description)
}

const CreateGoal = () => {
    const [updatePage, setUpdatePage] = useState(true)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(updatePage) {
            //Do something
            setUpdatePage(false)
        }
    })
    return (
        <div className="sidebar-content-container">
            <SideBar/>
            
            <div className='page-container'>
                <h1>Create Goal</h1>
                
                <form class="g-3 needs-validation was-validated" noValidate>
                    <label for="InputGoalTitle" class="form-label">Goal Title*</label>
                    <input type="text" class="form-control" id="InputGoalTitle" required onChange={(event) => {
                        setTitle(event.target.value)
                    }}/>
                    <div class="invalid-feedback">Please enter a goal title.</div>
                    <div class="valid-feedback"></div>
                    
                    <label for="TextAreaGoalDescription" class="form-label">Goal Description</label>
                    <textarea class="form-control" id="TextAreaGoalDescription" rows="3" onChange={(event) => {
                        setDescription(event.target.value)
                    }}></textarea>

                    
                    <button type="submit" class="btn btn-primary" disabled={title == ""} 
                    style={{marginTop:"5px"}}
                    onClick={(event) => {
                        onClick(event, title, description)
                    }}>Create</button>
                </form>
            </div>
        </div>
    );
}

export default CreateGoal
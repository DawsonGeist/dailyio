import react from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import '../styles.css'
import SideBar from '../Components/SideBar';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const onClick = (event, goalID, title, description, severity) => {
    event.preventDefault()
    console.log("Goal ID:")
    console.log(goalID)
    console.log("Title:")
    console.log(title)
    console.log("Description:")
    console.log(description)
    console.log("Severity:")
    console.log(severity)
    //Add completed boolean property

    alert("TODO: Create Task")
}

const CreateTask = () => {
    const [updatePage, setUpdatePage] = useState(true)
    const [goalID, setGoalID] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [severity, setSeverity] = useState("Low")
    const [formValid, setFormValid] = useState(false)

    const navigate = useNavigate()
    //Goal
    //Title
    //Description
    //Severity

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
                <h1>Create Task</h1>
                
                <form class="g-3 needs-validation" noValidate onSubmit={(event) => {
                    //Since we are doing noValidate for this form we are implementing custom css
                    //The only way for our valid/invalid feedback to render is if we check if the form is valid
                    //and if not, append 'was-validated' to the form classList
                    const form = event.target
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                        form.classList.add('was-validated')
                    }
                    else {
                        onClick(event, goalID, title, description, severity)
                        form.reset()
                        form.classList.remove('was-validated')
                        
                        //make the input field for the date picker required and clear input
                        const selectRelatedGoal = document.querySelectorAll('#SelectGoal')
                        Array.from(selectRelatedGoal).forEach((select) => {
                            select.value = ""
                        })
                    }
                }}>

                    <label for="SelectGoal" class="form-label">Related Goal*</label>
                    <select class="form-select" id="SelectGoal" required onChange={(event) => {
                        console.log(event)
                        setGoalID(event.target.value)
                    }}>
                        <option selected disabled value="">Please select a related goal...</option>
                        <option value="NA">N/A</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div class="invalid-feedback">
                    Please select a valid goal.
                    </div>

                    <label for="InputGoalTitle" class="form-label">Task Title*</label>
                    <input type="text" class="form-control" id="InputGoalTitle" required onChange={(event) => {
                        setTitle(event.target.value)
                    }}/>
                    <div class="invalid-feedback">Please enter a task title.</div>
                    <div class="valid-feedback"></div>
                    
                    <label for="TextAreaGoalDescription" class="form-label">Task Description</label>
                    <textarea class="form-control" id="TextAreaGoalDescription" rows="3" onChange={(event) => {
                        setDescription(event.target.value)
                    }}></textarea>

                    
                    <label for="SelectSeverity" class="form-label">Severity</label>
                    <select class="form-select" aria-label="SelectSeverity" required onChange={(event) => {
                        console.log(event)
                        setSeverity(event.target.value)
                    }}>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                    
                    <button type='submit' className='btn btn-primary' style={{marginTop:"5px"}}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateTask
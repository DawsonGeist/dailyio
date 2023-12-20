import react from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import '../styles.css'
import SideBar from '../Components/SideBar';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const onClick = (event, title, description, endDate) => {
    event.preventDefault()
    console.log("Title:")
    console.log(title)
    console.log("Description:")
    console.log(description)
    console.log("End Date")
    console.log(endDate)
    //Add completed boolean property

    alert("TODO: Create Goal")
}

const CreateGoal = () => {
    const [updatePage, setUpdatePage] = useState(true)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [endDate, setEndDate] = useState(new Date())
    const [calendarOpen, setCalendarOpen] = useState(false)
    const [formValid, setFormValid] = useState(false)

    const navigate = useNavigate()

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

                    <label for="TextAreaGoalEndDate" className='form-label'>Estimated Completion</label>
                    <div className='row'>
                        <div className='col'>
                            <DatePicker 
                            className='form-control'
                            id='TextAreaGoalEndDate'
                            open={calendarOpen}
                            placeholderText={`${endDate.getMonth()+1}/${endDate.getDate()}/${endDate.getFullYear()}`}
                            value={`${endDate.getMonth()+1}/${endDate.getDate()}/${endDate.getFullYear()}`}
                            startDate={null}
                            scrollableYearDropdown
                            showMonthDropdown
                            showYearDropdown
                            minDate={new Date()}
                            onChange={(event) => {
                                console.log(event)
                                setEndDate(event)
                                setCalendarOpen(false)
                            }}
                            onClickOutside={(event) => {
                                console.log(event)
                                if(event.target.id != "btn-ToggleCalendar")
                                    setCalendarOpen(false)
                            }}
                            />
                        </div>
                        <div className='col'>
                            <button className='btn btn-primary' 
                            id="btn-ToggleCalendar"
                            type='button'
                            onClick={(event) => {
                                setCalendarOpen(!calendarOpen)
                            }}>Calendar</button>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" disabled={title == ""} 
                    style={{marginTop:"5px"}}
                    onClick={(event) => {
                        onClick(event, title, description, endDate)
                        navigate('/GoalsOverview')
                    }}>Create</button>
                </form>
            </div>
        </div>
    );
}

export default CreateGoal
import react from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import '../styles.css'
import SideBar from '../Components/SideBar';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const onClick = (event, title, description, taskID, startDate, endDate) => {
    event.preventDefault()
    console.log("Title:")
    console.log(title)
    console.log("Description:")
    console.log(description)
    console.log("Task ID:")
    console.log(taskID)
    console.log("Start Date:")
    console.log(startDate)
    console.log("End Date:")
    console.log(endDate)
    //Add completed boolean property

    alert("TODO: Create Event")
}


const CreateEvent = ({relatedTask=null}) => {
    const [updatePage, setUpdatePage] = useState(true)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [startCalendarOpen, setStartCalendarOpen] = useState(false)
    const [endCalendarOpen, setEndCalendarOpen] = useState(false)
    const [taskID, setTaskID] = useState((relatedTask==null? "NA" : relatedTask))

    const navigate = useNavigate()

    useEffect(() => {
        if(updatePage) {
            //Do something
            setUpdatePage(false)
        }
    })

    //make the input field for the date picker required
    const datePickerInputField = document.querySelectorAll('#TextAreaGoalstartDate')
    Array.from(datePickerInputField).forEach((input) => {
        input.required = true
    })

    return (
        <div className="sidebar-content-container">
            <SideBar/>
            
            <div className='page-container'>
                <h1>Schedule Event</h1>
                
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
                        onClick(event, title, description, taskID, startDate, endDate)
                        form.reset()
                        form.classList.remove('was-validated')
                        //make the input field for the date picker required and clear input
                        const startDatePickerInputField = document.querySelectorAll('#TextAreaEventstartDate')
                        Array.from(startDatePickerInputField).forEach((input) => {
                            input.required = true
                            input.value = ""
                        })
                        //make the input field for the date picker required and clear input
                        const endDatePickerInputField = document.querySelectorAll('#TextAreaEventEndDate')
                        Array.from(endDatePickerInputField).forEach((input) => {
                            input.required = true
                            input.value = ""
                        })
                        setStartDate("")
                        setEndDate("")
                        setTitle("")
                        setDescription("")
                    }
                }}>
                    <label for="InputEventTitle" class="form-label">Event Title*</label>
                    <input type="text" class="form-control" id="InputEventTitle" required onChange={(event) => {
                        setTitle(event.target.value)
                    }}/>
                    <div class="invalid-feedback">Please enter an event title.</div>
                    <div class="valid-feedback"></div>
                    
                    <label for="TextAreaEventDescription" class="form-label">Event Description</label>
                    <textarea class="form-control" id="TextAreaEventDescription" rows="3" onChange={(event) => {
                        setDescription(event.target.value)
                    }}></textarea>

                    

                    <label for="SelectTask" class="form-label">Related Task</label>
                    <select class="form-select" id="SelectTask" value={taskID} onChange={(event) => {
                        console.log(event)
                        setTaskID(event.target.value)
                    }}>
                        <option value="NA">N/A</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <div className='row'>
                        <div className='col-4'>
                            <label for="TextAreaEventstartDate" className='form-label'>Start Date*</label>
                            <div className="customDatePickerWidth">
                                <DatePicker 
                                className='form-control'
                                id='TextAreaEventstartDate'
                                open={startCalendarOpen}
                                placeholderText={"Select a Start Date"}
                                value={startDate == "" ? "" : `${startDate.toDateString()} @ ${startDate.toLocaleTimeString()}`}
                                startDate={null}
                                scrollableYearDropdown
                                showMonthDropdown
                                showYearDropdown
                                showTimeSelect
                                showTimeInput
                                required
                                minDate={new Date()}
                                onChange={(event) => {
                                    console.log(event)
                                    setStartDate(event)
                                    setEndDate(event)
                                }}
                                onClickOutside={(event) => {
                                    console.log(event)
                                    if(event.target.id != "btn-ToggleStartCalendar")
                                        setStartCalendarOpen(false)
                                }}
                                />
                            </div>
                        </div>
                        <div className='col-2 align-self-end'>
                            <button className='btn btn-primary' 
                            id="btn-ToggleStartCalendar"
                            type='button'
                            onClick={(event) => {
                                setStartCalendarOpen(!startCalendarOpen)
                            }}>Calendar</button>
                        </div>
                        <div className='col-4'>
                            <label for="TextAreaEventEndDate" className='form-label'>End Date*</label>
                            <div className="customDatePickerWidth">
                                <DatePicker 
                                className='form-control'
                                id='TextAreaEventEndDate'
                                open={endCalendarOpen}
                                placeholderText={"Select a End Date"}
                                value={endDate == "" ? "" : `${endDate.toDateString()} @ ${endDate.toLocaleTimeString()}`}
                                startDate={null}
                                scrollableYearDropdown
                                showMonthDropdown
                                showYearDropdown
                                showTimeSelect
                                showTimeInput
                                required
                                minDate={startDate}
                                onChange={(event) => {
                                    console.log(event)
                                    setEndDate(event)
                                    setEndCalendarOpen(false)
                                }}
                                onClickOutside={(event) => {
                                    console.log(event)
                                    if(event.target.id != "btn-ToggleEndCalendar")
                                        setEndCalendarOpen(false)
                                }}
                                />
                            </div>
                        </div>
                        <div className='col-2 align-self-end'>
                            <button className='btn btn-primary' 
                            id="btn-ToggleEndCalendar"
                            type='button'
                            onClick={(event) => {
                                setEndCalendarOpen(!endCalendarOpen)
                            }}>Calendar</button>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary"
                    style={{marginTop:"15px"}}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateEvent
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
    const [endDate, setEndDate] = useState("")
    const [calendarOpen, setCalendarOpen] = useState(false)
    const [calendarButtonEnabled, setCalendarButtonEnabled] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if(updatePage) {
            //Do something
            setUpdatePage(false)
        }
    })

    //make the input field for the date picker required
    const datePickerInputField = document.querySelectorAll('#TextAreaGoalEndDate')
    Array.from(datePickerInputField).forEach((input) => {
        input.required = true
    })

    return (
        <div className="sidebar-content-container">
            <SideBar/>
            
            <div className='page-container'>
                <h1>Create Goal</h1>
                
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
                        onClick(event, title, description, endDate)
                        form.reset()
                        form.classList.remove('was-validated')
                        //make the input field for the date picker required and clear input
                        const datePickerInputField = document.querySelectorAll('#TextAreaGoalEndDate')
                        Array.from(datePickerInputField).forEach((input) => {
                            input.required = true
                            input.value = ""
                        })
                        //make the input field for the date picker required and clear input
                        const suggestedTimeFrame = document.querySelectorAll('#SelectSuggestedEndDate')
                        Array.from(suggestedTimeFrame).forEach((select) => {
                            select.value = ""
                        })
                        setEndDate("")
                        setTitle("")
                        setDescription("")
                    }
                }}>
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

                    <div className='row'>
                        <div className='col-4'>
                            <label for="TextAreaGoalEndDate" className='form-label'>Estimated Completion Date</label>
                            <div className="customDatePickerWidth">
                                <DatePicker 
                                className='form-control'
                                id='TextAreaGoalEndDate'
                                open={calendarOpen}
                                placeholderText={"Select a time frame"}
                                value={endDate == "" ? "" : `${endDate.getMonth()+1}/${endDate.getDate()}/${endDate.getFullYear()}`}
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
                        </div>
                        <div className='col-1 align-self-end'>
                            <button className='btn btn-primary' 
                            id="btn-ToggleCalendar"
                            type='button'
                            disabled={!calendarButtonEnabled}
                            onClick={(event) => {
                                setCalendarOpen(!calendarOpen)
                            }}>Calendar</button>
                        </div>
                        <div className='col-4'>
                            <label for="SelectSuggestedEndDate" className='form-label'>Suggested Time Frame</label>
                            <select class="form-select" id="SelectSuggestedEndDate" required 
                            onChange={(event) => {
                                if(event.target.value != "custom") {
                                    setCalendarButtonEnabled(false)
                                    const timePeriod = event.target.value.split(" ")
                                    //requiredMoment
                                    setEndDate(moment(new Date()).add(timePeriod[0], timePeriod[1]).toDate())
                                }
                                else {
                                    setCalendarButtonEnabled(true)
                                }
                            }}>
                                <option selected disabled value="">Please select an option below</option>
                                <option value="1 Week">1 Week</option>
                                <option value="1 Month">1 Month</option>
                                <option value="6 Month">6 Months</option>
                                <option value="1 Year">1 Year</option>
                                <option value="5 Year">5 Years</option>
                                <option value="custom">Custom</option>
                            </select>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary"
                    style={{marginTop:"15px"}}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateGoal
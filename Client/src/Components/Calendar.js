import react from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import '../styles.css'
import moment from 'moment'

import CalenderCell from './CalendarCell';

const sameDay = (dateA, dateB) => {
    var sameDay = false
    if(dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate()) {
        sameDay = true
    }
    return sameDay
}

const loadCalendar = (date, events, selectedDay, setSelectedDay) => {
    const dayInTheMonth = date.getDate()
    var copiedEvents = [...events]
   
    // Get the Start of the month
    const startOfMonth = moment(date).subtract(dayInTheMonth-1, 'days').toDate()

    // Figure out how many days we have to back fill with the previous month
    const dayOfWeekForStartOfMonth = startOfMonth.getDay()
    const startOfCalendar = moment(startOfMonth).subtract(dayOfWeekForStartOfMonth, 'days').toDate()

    //Get Month Name
    const monthName = moment(date).format('MMMM')
    const year = date.getFullYear()
    const calendarTitle = `${monthName} ${year}`
   
    //Build out each week of the calendar
    var week1 = []
    var week2 = []
    var week3 = []
    var week4 = []
    var week5 = []
    var week6 = []
    var tempEvents = []
    for(var i = 0; i < 42; i++) {
        var currentDay = moment(startOfCalendar).add(i, 'days').toDate()
        // Get all the events for that day
        while(true) {
            if(copiedEvents.length > 0 && sameDay(copiedEvents[0].startDate, currentDay)) {
                tempEvents.push(copiedEvents.shift())
            }
            else {
                break;
            }
        }

        if(i < 7) {
            week1.push({
                day: currentDay,
                events: tempEvents
            })
        }
        else if(i >= 7 && i < 14) {
            week2.push({
                day: currentDay,
                events: tempEvents
            })
        }
        else if(i >= 14 && i < 21) {
            week3.push({
                day: currentDay,
                events: tempEvents
            })
        }
        else if(i >= 21 && i < 28) {
            week4.push({
                day: currentDay,
                events: tempEvents
            })
        }
        else if(i >= 28 && i < 35) {
            week5.push({
                day: currentDay,
                events: tempEvents
            })
        }
        else if(i >= 35 && i < 42) {
            week6.push({
                day: currentDay,
                events: tempEvents
            })
        }
        // reset events
        tempEvents = []
    }
    return ( 
        <div className='container border border-dark'>
            <div className='row text-center g-0'>
                <h1>{calendarTitle}</h1>
            </div>
            <div className='row text-center g-0'>
                <div className='col g-0'>
                    <p>Sunday</p>
                </div>
                <div className='col g-0'>
                    <p>Monday</p>
                </div>
                <div className='col g-0'>
                    <p>Tuesday</p>
                </div>
                <div className='col g-0'>
                    <p>Wednesday</p>
                </div>
                <div className='col g-0'>
                    <p>Thursday</p>
                </div>
                <div className='col g-0'>
                    <p>Friday</p>
                </div>
                <div className='col g-0'>
                    <p>Saturday</p>
                </div>
            </div>
            <div className='row g-0'>{
                week1.map((day) => {
                    var selected = sameDay(day.day, selectedDay)
                    return (
                        <div className='col g-0' onClick={(event) => {
                            setSelectedDay(day.day)
                            selected = true
                        }}>
                            <CalenderCell day={day.day.getDate()} events={day.events} selected={selected}/>
                        </div>
                    )
                })
            }
            </div>

            <div className='row g-0'>{
                week2.map((day) => {
                    var selected = sameDay(day.day, selectedDay)
                    return (
                        <div className='col g-0' onClick={(event) => {
                            setSelectedDay(day.day)
                            selected = true
                        }}>
                            <CalenderCell day={day.day.getDate()} events={day.events} selected={selected}/>
                        </div>
                    )
                })
            }
            </div>

            <div className='row g-0'>{
                week3.map((day) => {
                    var selected = sameDay(day.day, selectedDay)
                    return (
                        <div className='col g-0' onClick={(event) => {
                            setSelectedDay(day.day)
                            selected = true
                        }}>
                            <CalenderCell day={day.day.getDate()} events={day.events} selected={selected}/>
                        </div>
                    )
                })
            }
            </div>
            
            <div className='row g-0'>{
                week4.map((day) => {
                    var selected = sameDay(day.day, selectedDay)
                    return (
                        <div className='col g-0' onClick={(event) => {
                            setSelectedDay(day.day)
                            selected = true
                        }}>
                            <CalenderCell day={day.day.getDate()} events={day.events} selected={selected}/>
                        </div>
                    )
                })
            }
            </div>
            
            <div className='row g-0'>{
                week5.map((day) => {
                    var selected = sameDay(day.day, selectedDay)
                    return (
                        <div className='col g-0' onClick={(event) => {
                            setSelectedDay(day.day)
                            selected = true
                        }}>
                            <CalenderCell day={day.day.getDate()} events={day.events} selected={selected}/>
                        </div>
                    )
                })
            }
            </div>
            
            <div className='row g-0'>{
                week6.map((day) => {
                    var selected = sameDay(day.day, selectedDay)
                    return (
                        <div className='col g-0' onClick={(event) => {
                            setSelectedDay(day.day)
                            selected = true
                        }}>
                            <CalenderCell day={day.day.getDate()} events={day.events} selected={selected}/>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}

const Calendar = ({events}) => {
    const [date, setDate] = useState(new Date())
    const [selectedDay, setSelectedDay] = useState(date)
    const dummyEvents = [{
        time: "10:15 am",
        title: "Wake up"
    },
    {
        time: "12:15 pm",
        title: "Lunch"
    },
    {
        time: "10:15 pm",
        title: "Bed time"
    }]
    // Calendar is a matrix of size 5 x 7 
    // Column Headers go from Sunday to Saturday
    return (
        <div className='flex-container w-100 h-100'>
            <>{loadCalendar(date, events, selectedDay, setSelectedDay)}</>
            
            <button className='btn btn-danger' 
            onClick={(event) => {
                setDate(moment(date).subtract(1, 'month').toDate())
            }}>Previous Month</button>
            <button className='btn btn-success' 
            onClick={(event) => {
                setDate(moment(date).add(1, 'month').toDate())
            }}>Next Month</button>
        </div>
    );
}

export default Calendar;
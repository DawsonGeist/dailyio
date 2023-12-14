import react from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import '../styles.css'

const showExpandOption = (events) => {
    if(events.length > 0) {
        return (
            <div class="dropdown">
                <a href="#" 
                class="d-flex align-items-center text-decoration-none dropdown-toggle" 
                id="dropdown" 
                data-bs-toggle="dropdown"
                role="button">
                    <strong>Show More</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">{
                    events.map((event) => {
                        var hours = event.startDate.getHours()
                        const ampm = hours / 12 < 1 ? 'AM' : 'PM'
                        hours = hours > 12 ? hours - 12 : hours
                        var mins = event.startDate.getMinutes()
                        mins = mins == 0 ? "00" : mins
                        const eventString = `${hours}:${mins} ${ampm} - ${event.title}`
                        return (
                            <li><a class="dropdown-item" href="#">{eventString}</a></li>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
}

const CalenderCell = ( {day, events, selected}) => {
    return (
        <div className={selected ? 'calendar-cell border border-primary': 'calendar-cell border border-light'}>
            <div className='calendar-cell-top'>
                <p>{day}</p>
                <ul className='calendar-cell-content'>{events.map((event) => {
                    var hours = event.startDate.getHours()
                    const ampm = hours / 12 < 1 ? 'AM' : 'PM'
                    hours = hours > 12 ? hours - 12 : hours
                    var mins = event.startDate.getMinutes()
                    mins = mins == 0 ? "00" : mins
                    const eventString = `${hours}:${mins} ${ampm} - ${event.title}`
                    return (
                        <li>{eventString}</li>
                    );
                })}</ul>
            </div>
            <div className='calendar-cell-bottom'>{showExpandOption(events)}</div>
        </div>
    );
}

export default CalenderCell
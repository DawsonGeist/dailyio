import react from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import '../styles.css'
import SideBar from '../Components/SideBar';
import Calendar from '../Components/Calendar';

const PlannerOverview = () => {

    const dummyEvents = [
        {
            title: "ICSI 500 Final",
            startDate: new Date("November 28, 2023 19:30:00"),
            endDate: new Date("November 28, 2023 20:50:00"),
        },
        {
            title: "ICSI 503 Final",
            startDate: new Date("December 8, 2023 10:30:00"),
            endDate: new Date("December 8, 2023 11:50:00"),
        },
        {
            title: "ICSI 518 Final",
            startDate: new Date("December 12, 2023 10:30:00"),
            endDate: new Date("December 12, 2023 11:50:00"),
        },
        {
            title: "Wake up",
            startDate: new Date("December 14, 2023 08:00:00"),
            endDate: new Date("December 14, 2023 08:30:00"),
        },
        {
            title: "Shower up",
            startDate: new Date("December 14, 2023 09:00:00"),
            endDate: new Date("December 14, 2023 09:30:00"),
        },
        {
            title: "Go to Lib",
            startDate: new Date("December 14, 2023 10:00:00"),
            endDate: new Date("December 14, 2023 10:15:00"),
        },
        {
            title: "Comment on how empty the lib is",
            startDate: new Date("December 14, 2023 10:20:00"),
            endDate: new Date("December 14, 2023 10:25:00"),
        },
        {
            title: "Annoy everyone with frivolous css updates",
            startDate: new Date("December 14, 2023 11:00:00"),
            endDate: new Date("December 14, 2023 14:10:00"),
        },
    ]

    return (
        <div className='sidebar-content-container'>
            <SideBar/>
            
            <div className='page-container'>
                <h1>Planner Overview</h1>
                <Calendar events={dummyEvents}/>
            </div>
        </div>
    )
}

export default PlannerOverview
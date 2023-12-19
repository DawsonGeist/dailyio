import react from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import '../styles.css'
import SideBar from '../Components/SideBar';

const renderGoals = (goals) => {
    if(goals.length > 0) {
        return (
            <>
                <h6>Current Goals</h6>
                <>
                {
                    goals.map((goal) => {
                        const accordionID = `accordion${goal.id}`
                        const accordionCollapseParent = `#${accordionID}`
                        const collapseID = `collapse${goal.id}`
                        const targetID = `#${collapseID}`
                        return (
                            <div class="accordion" id={accordionID}>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={targetID} aria-expanded="false" aria-controls="collapseOne">
                                        {goal.title}
                                        </button>
                                    </h2>
                                    <div id={collapseID} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent={accordionCollapseParent}>
                                        <div class="accordion-body">
                                        {goal.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                </>
            </>
        );
    }
    else {
        return (<h6>Current Goals</h6>);
    }
}

const renderTasks = (tasks) => {
    if (tasks.length > 0) {
        return (
            <>
                <h6>Upcoming Tasks</h6>
                <>
                    {
                        tasks.map((task) => {
                            const accordionID = `accordion${task.id}`
                            const accordionCollapseParent = `#${accordionID}`
                            const collapseID = `collapse${task.id}`
                            const targetID = `#${collapseID}`
                            const accordionTitle = `${task.title} (Priority: ${task.severity})`
                            return (
                                <div className='row'>
                                    <div className='col'>
                                        <div class="accordion" id={accordionID}>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={targetID} aria-expanded="true" aria-controls="collapseOne">
                                                        {accordionTitle}
                                                        </button>
                                                    </h2>
                                                    <div id={collapseID} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent={accordionCollapseParent}> 
                                                        <div class="accordion-body">
                                                        {task.description}
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div> 
                                </div>
                            );
                        })
                    }
                </>
    
            </>
        );
    }
    else {
        return (<h6>Upcoming Tasks</h6>);
    }
    
} 

const renderNotes = (notes, goals, tasks) => {
    if(notes != {} && notes?.goal_notes.length > 0 && notes?.task_notes.length > 0)
    {
        return (
        <>
            <h6>Related Notes</h6>
            <>
                {
                    notes.goal_notes.map((goal_note) => {
                        const relatedgoal = goals.find((goal) => {
                            if(goal.id == goal_note.goal_id) {
                                return goal
                            }
                        })
                        const accordionID = `accordion${goal_note.id}`
                        const accordionCollapseParent = `#${accordionID}`
                        const collapseID = `collapse${goal_note.id}`
                        const targetID = `#${collapseID}`
                        const accordionTitle = `${goal_note.note.title} (Goal: ${relatedgoal.title})`
                        const accordianBodyFooter = `Reminder: ${goal_note.note.reminder.frequency} ${goal_note.note.reminder.method}`
                        return (
                            <div className='row'>
                                <div className='col'>
                                    <div class="accordion" id={accordionID}>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={targetID} aria-expanded="true" aria-controls="collapseOne">
                                                    {accordionTitle}
                                                    </button>
                                                </h2>
                                                <div id={collapseID} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent={accordionCollapseParent}> 
                                                    <div class="accordion-body">
                                                    {goal_note.note.body}
                                                    </div>
                                                    <p>{accordianBodyFooter}</p>
                                                </div>
                                            </div>
                                    </div>
                                </div> 
                            </div>
                        );
                    })
                }
            </>
            <>
                {
                    notes.task_notes.map((task_note) => {
                        const relatedTask = tasks.find((task) => {
                                if(task.id == task_note.task_id) {
                                    return task
                                }
                            })
                        const notesID = task_note.id
                        const accordionID = `accordion${notesID}`
                        const accordionCollapseParent = `#${accordionID}`
                        const collapseID = `collapse${notesID}`
                        const targetID = `#${collapseID}`
                        const accordionTitle = `${task_note.note.title} (Task: ${relatedTask.title})`
                        const accordianBodyFooter = `Reminder: ${task_note.note.reminder.frequency} ${task_note.note.reminder.method}`
                        return (
                            <div className='row'>
                                <div className='col'>
                                    <div class="accordion" id={accordionID}>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={targetID} aria-expanded="true" aria-controls="collapseOne">
                                                    {accordionTitle}
                                                    </button>
                                                </h2>
                                                <div id={collapseID} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent={accordionCollapseParent}> 
                                                    <div class="accordion-body">
                                                    {task_note.note.body}
                                                    </div>
                                                    <p>{accordianBodyFooter}</p>
                                                </div>
                                            </div>
                                    </div>
                                </div> 
                            </div>
                        );
                    })
                }
            </>
        </>
        );
    }
    else if(notes?.goal_notes.length > 0) {
        return (
        <>
            <h6>Related Notes</h6>
            <>
                {
                    notes.goal_notes.map((goal_note) => {
                        const relatedgoal = goals.find((goal) => {
                            if(goal.id == goal_note.goal_id) {
                                return goal
                            }
                        })
                        const accordionID = `accordion${goal_note.id}`
                        const accordionCollapseParent = `#${accordionID}`
                        const collapseID = `collapse${goal_note.id}`
                        const targetID = `#${collapseID}`
                        const accordionTitle = `${goal_note.note.title} (Goal: ${relatedgoal.title})`
                        const accordianBodyFooter = `Reminder: ${goal_note.note.reminder.frequency} ${goal_note.note.reminder.method}`
                        return (
                            <div className='row'>
                                <div className='col'>
                                    <div class="accordion" id={accordionID}>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={targetID} aria-expanded="true" aria-controls="collapseOne">
                                                    {accordionTitle}
                                                    </button>
                                                </h2>
                                                <div id={collapseID} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent={accordionCollapseParent}> 
                                                    <div class="accordion-body">
                                                    {goal_note.note.body}
                                                    </div>
                                                    <p>{accordianBodyFooter}</p>
                                                </div>
                                            </div>
                                    </div>
                                </div> 
                            </div>
                        );
                    })
                }
            </>
        </>
        );
    }
    else if(notes?.task_notes.length > 0) {
        return (
        <>
            <h6>Related Notes</h6>
            <>
                {
                    notes.task_notes.map((task_note) => {
                        const relatedTask = tasks.find((task) => {
                                if(task.id == task_note.task_id) {
                                    return task
                                }
                            })
                        const noteID = task_note.id
                        const accordionID = `accordion${noteID}`
                        const accordionCollapseParent = `#${accordionID}`
                        const collapseID = `collapse${noteID}`
                        const targetID = `#${collapseID}`
                        const accordionTitle = `${task_note.note.title} (Task: ${relatedTask.title})`
                        const accordianBodyFooter = `Reminder: ${task_note.note.reminder.frequency} ${task_note.note.reminder.method}`
                        return (
                            <div className='row'>
                                <div className='col'>
                                    <div class="accordion" id={accordionID}>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={targetID} aria-expanded="true" aria-controls="collapseOne">
                                                    {accordionTitle}
                                                    </button>
                                                </h2>
                                                <div id={collapseID} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent={accordionCollapseParent}> 
                                                    <div class="accordion-body">
                                                    {task_note.note.body}
                                                    </div>
                                                    <p>{accordianBodyFooter}</p>
                                                </div>
                                            </div>
                                    </div>
                                </div> 
                            </div>
                        );
                    })
                }
            </>
        </>
        );
    }
    else {
        return (
            <h6>Related Notes</h6>
        );
    }
}

const renderEvents = (events, tasks) => {
    if(events.length > 0 && tasks.length > 0) {
        return (
            <>
                <h6>Related Events</h6>
                <>
                    {
                        events.map((event) => {
                            const relatedTask = tasks.find((task) => {
                                    if(task.id == event.task_id) {
                                        return task
                                    }
                                })
                            const eventID = event.id
                            const accordionID = `accordion${eventID}`
                            const accordionCollapseParent = `#${accordionID}`
                            const collapseID = `collapse${eventID}`
                            const targetID = `#${collapseID}`
                            const accordionTitle = `${event.title} (Task: ${relatedTask.title})`
                            const accordianBodyFooter = `Start Date: ${event.startDate}`
                            return (
                                <div className='row'>
                                    <div className='col'>
                                        <div class="accordion" id={accordionID}>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={targetID} aria-expanded="true" aria-controls="collapseOne">
                                                        {accordionTitle}
                                                        </button>
                                                    </h2>
                                                    <div id={collapseID} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent={accordionCollapseParent}> 
                                                        <p>{accordianBodyFooter}</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div> 
                                </div>
                            );
                        })
                    }
                </>
            </>
        );
    }
    else {
        return (<h6>Upcoming Events</h6>);
    }
} 

const GoalsOverview = () => {
    const [updatePage, setUpdatePage] = useState(true)
    const [goals, setgoals] = useState([])
    const [tasks, setTasks] = useState([])
    const [notes, setNotes] = useState({})
    const [events, setEvents] = useState([])
    const dummyGoals = [
        {
            id: 0,
            title: "Create Test App",
            description: "Create a test app with miscellanious and frankly unrelated features such that you can demonstrate working knowledge of bootstrap, react, and mongoDB",
        },
        {
            id: 1,
            title: "Internship Application",
            description: "We need to secure a summer intership for 2024 such that we continue to learn between semesters",
        },
        {
            id: 2,
            title: "Social Life",
            description: "Investing in my social circle such that I am involved in the lives of people I care about"
        },
        ]
    const dummyTasks = [
        {
            id: 3,
            goal_id: 0,
            title: "Implementing goals",
            description: "Getting an outline of the goals tab, starting with Overview, then brainstorming further",
            severity: "Medium",
        },
        {
            id: 4,
            goal_id: 0,
            title: "Implementing Create Events",
            description: "Creating form to push Event to backend",
            severity: "Low",
        },
        {
            id: 5,
            goal_id: 0,
            title: "Creating Sign In Page",
            description: "Before I can make the backend I need to store user data so I can incorporate it into backend design",
            severity: "High",
        },
        {
            id: 6,
            goal_id: 1,
            title: "Monitoring Internship Response Emails",
            description: "Continuously listening for new emails regarding potential summer interships",
            severity: "Medium",
        },
        {
            id: 7,
            goal_id: 1,
            title: "Daily Internship Applications",
            description: "Habitually scouring job boards for potential leads on internships",
            severity: "High",
        },
        {
            id: 8,
            goal_id: 2,
            title: "Reaching out to contacts",
            description: "Call or Text contacts and get updates on current life events and gossip",
            severity: "Low",
        },
    ]
    const dummyNotes = {
        goal_notes: [
            {
                id: 9,
                goal_id: 0,
                note: {
                    title: "Test Note A",
                    body: "Test Note A Body",
                    severity: "Low",
                    reminder: {
                        frequency: "Daily",
                        method: "Text",
                    }
                }
            },
            {
                id: 10,
                goal_id: 1,
                note: {
                    title: "Test Note B",
                    body: "Test Note B Body",
                    severity: "High",
                    reminder: {
                        frequency: "Weekly",
                        method: "Email",
                    }
                }
            },
        ],
        task_notes: [
            {
                id: 11,
                task_id: 7,
                note: {
                    title: "Test Note C",
                    body: "Test Note C Body",
                    severity: "Low",
                    reminder: {
                        frequency: "Daily",
                        method: "Text",
                    }
                }
            },
            {
                id: 12,
                task_id: 8,
                note: {
                    title: "Test Note D",
                    body: "Test Note D Body",
                    severity: "High",
                    reminder: {
                        frequency: "Weekly",
                        method: "Email",
                    }
                }
            },
        ]
    }

    const dummyEvents = [
        {
            task_id: 6,
            id: 13,
            title: "Event A",
            startDate: new Date("December 14, 2023 11:00:00"),
            endDate: new Date("December 15, 2023 14:10:00"),
        },
    ]

    useEffect(() => {
        if(updatePage) {
            setgoals(dummyGoals)
            setTasks(dummyTasks)
            setNotes(dummyNotes)
            setEvents(dummyEvents)
            setUpdatePage(false)
        }
    })
    if(updatePage) {
        return <h1>Loading</h1>
    }
    else {
        return (
            <div className="sidebar-content-container">
                <SideBar/>
                
                <div className='page-container'>
                    <div className='container'>
                        <div className='row'>
                            <h1>Goals Overview</h1>
                        </div>
                        
                        <div className='row text-center'>
                            <div className='col'>
                            {
                                renderGoals(goals)
                            }
                            </div>
                            <div className='col'>
                            {
                                renderTasks(tasks)
                            }
                            </div>
                        </div>
                        
                        <div className='row text-center'>
                            <div className='col'>
                            {
                                renderNotes(notes, goals, tasks)
                            }
                            </div>
                            <div className='col'>
                            {
                                renderEvents(events, tasks)
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoalsOverview;
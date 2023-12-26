import  react from 'react'
import  {useState, useEffect, } from 'react'
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import '../styles.css'

const highlightTab = (selectedTab, hoveringTab, currentTabName) => {
    //class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" 
    var classname = "nav-link text-white btn-toggle"
    if(hoveringTab === currentTabName || selectedTab === currentTabName) {
        classname = `${classname} active`
    }
    return classname
}

const autoCloseList = (currentTab, selectedTab) => {
    if(currentTab == selectedTab) {
        return "collapse show"
    }
    else {
        return "collapsing"
    }
}

const SideBar = () => {
    const [hoveringTab, setHoveringTab] = useState('none')
    const [selectedTab, setSelectedTab] = useState(localStorage.getItem('selectedTab'))
    const [updatePage, setUpdatePage] = useState(true)

    useEffect(() => {
        if(updatePage) {
            //do something
            setUpdatePage(false)
        }
    })
    const openSelectedTabs = document.querySelectorAll(`#${localStorage.getItem('selectedTab')}-collapse`)
    Array(openSelectedTabs).forEach((collapse) => {
        collapse.classname = "collapse show"
    })

    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-dark" style={{width: "280px", height: "100vh"}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32"></svg>
                <span class="fs-4">Test App</span>
            </a>
            <hr/>
            <ul class="nav nav-pills flex-column mb-auto list-unstyled bg-dark ps-0">
                <li class="nav-item">
                    <a href="/" class={highlightTab(selectedTab, hoveringTab, "home")} aria-current="page" 
                    onMouseEnter={(event) => {
                        setHoveringTab('home')
                        setUpdatePage(true)
                    }}
                    onMouseLeave={(event) => {
                        setHoveringTab('none')
                        setUpdatePage(true)
                    }}
                    onClick={(event) => {
                        setSelectedTab('home')
                        localStorage.setItem('selectedTab', 'home')
                        setUpdatePage(true)
                    }}>
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Home
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" 
                    id="btn-projects-collapse" 
                    data-bs-toggle="collapse"
                    data-bs-target="#projects-collapse" 
                    role="button"
                    class={highlightTab(selectedTab, hoveringTab, "projects")} aria-current="page" 
                    onMouseEnter={(event) => {
                        setHoveringTab('projects')
                        setUpdatePage(true)
                    }}
                    onMouseLeave={(event) => {
                        setHoveringTab('none')
                        setUpdatePage(true)
                    }}
                    onClick={(event) => {
                        setSelectedTab('projects')
                        localStorage.setItem('selectedTab', 'projects')
                        setUpdatePage(true)
                    }}>
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Goals
                    </a>
                    
                    <div class={autoCloseList("projects", selectedTab)} id="projects-collapse">
                        <ul class="list-unstyled fw-normal pb-1 small">
                            <li class="nav-item"><a href="/GoalsOverview" class="nav-link text-white">Overview</a></li>
                            <li class="nav-item"><a href="/CreateGoal" class="nav-link text-white">Create Goal</a></li>
                            <li class="nav-item"><a href="/CreateTask" class="nav-link text-white">Create Task</a></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#" 
                    id="btn-finances-collapse" 
                    data-bs-toggle="collapse"
                    data-bs-target="#finances-collapse" 
                    role="button"
                    class={highlightTab(selectedTab, hoveringTab, "finances")} aria-current="page" 
                    onMouseEnter={(event) => {
                        setHoveringTab('finances')
                        setUpdatePage(true)
                    }}
                    onMouseLeave={(event) => {
                        setHoveringTab('none')
                        setUpdatePage(true)
                    }}
                    onClick={(event) => {
                        setSelectedTab('finances')
                        localStorage.setItem('selectedTab', 'finances')
                        setUpdatePage(true)
                    }}>
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Finances
                    </a>
                    
                    <div class={autoCloseList("finances", selectedTab)} id="finances-collapse">
                        <ul class="list-unstyled fw-normal pb-1 small">
                            <li class="nav-item"><a href="#" class="nav-link text-white">Dashboard</a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-white">Connect Account</a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-white">Import Statement</a></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#" 
                    id="btn-planner-collapse" 
                    data-bs-toggle="collapse"
                    data-bs-target="#planner-collapse" 
                    role="button"
                    class={highlightTab(selectedTab, hoveringTab, "planner")} aria-current="page" 
                    onMouseEnter={(event) => {
                        setHoveringTab('planner')
                        setUpdatePage(true)
                    }}
                    onMouseLeave={(event) => {
                        setHoveringTab('none')
                        setUpdatePage(true)
                    }}
                    onClick={(event) => {
                        setSelectedTab('planner')
                        localStorage.setItem('selectedTab', 'planner')
                        setUpdatePage(true)
                    }}>
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Planner
                    </a>
                    
                    <div class={(autoCloseList("planner", selectedTab))} id="planner-collapse">
                        <ul class="list-unstyled fw-normal pb-1 small">
                            <li class="nav-item"><a href="/PlannerOverview" class="nav-link text-white" onClick={(event) => {
                            }}>Overview</a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-white">Schedule Event</a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-white">Import Calendar</a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-white">Connect Account</a></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#" 
                    id="btn-contacts-collapse" 
                    data-bs-toggle="collapse"
                    data-bs-target="#contacts-collapse"
                    role="button"
                    class={highlightTab(selectedTab, hoveringTab, "contacts")} aria-current="page" 
                    onMouseEnter={(event) => {
                        setHoveringTab('contacts')
                        setUpdatePage(true)
                    }}
                    onMouseLeave={(event) => {
                        setHoveringTab('none')
                        setUpdatePage(true)
                    }}
                    onClick={(event) => {
                        setSelectedTab('contacts')
                        localStorage.setItem('selectedTab', 'contacts')
                        setUpdatePage(true)
                    }}>
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Contacts
                    </a>

                    <div class={autoCloseList("contacts", selectedTab)} id="contacts-collapse">
                        <ul class="list-unstyled fw-normal pb-1 small">
                            <li class="nav-item"><a href="#" class="nav-link text-white">Address Book</a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-white">Create Contact</a></li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="#" 
                    id="btn-notes-collapse" 
                    data-bs-toggle="collapse"
                    data-bs-target="#notes-collapse" 
                    role="button"
                    class={highlightTab(selectedTab, hoveringTab, "notes")} aria-current="page" 
                    onMouseEnter={(event) => {
                        setHoveringTab('notes')
                        setUpdatePage(true)
                    }}
                    onMouseLeave={(event) => {
                        setHoveringTab('none')
                        setUpdatePage(true)
                    }}
                    onClick={(event) => {
                        setSelectedTab('notes')
                        localStorage.setItem('selectedTab', 'notes')
                        setUpdatePage(true)
                    }}>
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Notes
                    </a>
                    
                    <div class={autoCloseList("notes", selectedTab)} id="notes-collapse">
                        <ul class="list-unstyled fw-normal pb-1 small">
                            <li class="nav-item"><a href="#" class="nav-link text-white">Overview</a></li>
                            <li class="nav-item"><a href="#" class="nav-link text-white">Create Note</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <hr/>
            <div class="dropdown">
                <a href="#" 
                class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" 
                id="dropdown" 
                data-bs-toggle="dropdown"
                role="button">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                    <strong>mdo</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
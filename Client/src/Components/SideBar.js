import  react from 'react'
import  {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // This fixed the issue with dropdowns?
import '../styles.css'

const highlightTab = (selectedTab, hoveringTab, currentTabName) => {
    var classname = "nav-link text-white"
    if(hoveringTab === currentTabName || selectedTab === currentTabName) {
        classname = `${classname} active`
    }
    return classname
}

const SideBar = () => {
    const [hoveringTab, setHoveringTab] = useState('none')
    const [selectedTab, setSelectedTab] = useState('home')
    const [updatePage, setUpdatePage] = useState(true)

    useEffect(() => {
        if(updatePage) {
            //do something
            setUpdatePage(false)
        }
    })

    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px", height: "100vh"}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32"></svg>
                <span class="fs-4">Test App</span>
            </a>
            <hr/>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="#" class={highlightTab(selectedTab, hoveringTab, "home")} aria-current="page" 
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
                        setUpdatePage(true)
                    }}>
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Home
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class={highlightTab(selectedTab, hoveringTab, "dashboard")} aria-current="page" 
                    onMouseEnter={(event) => {
                        setHoveringTab('dashboard')
                        setUpdatePage(true)
                    }}
                    onMouseLeave={(event) => {
                        setHoveringTab('none')
                        setUpdatePage(true)
                    }}
                    onClick={(event) => {
                        setSelectedTab('dashboard')
                        setUpdatePage(true)
                    }}>
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class={highlightTab(selectedTab, hoveringTab, "orders")} aria-current="page" 
                    onMouseEnter={(event) => {
                        setHoveringTab('orders')
                        setUpdatePage(true)
                    }}
                    onMouseLeave={(event) => {
                        setHoveringTab('none')
                        setUpdatePage(true)
                    }}
                    onClick={(event) => {
                        setSelectedTab('orders')
                        setUpdatePage(true)
                    }}>
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Orders
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class={highlightTab(selectedTab, hoveringTab, "products")} aria-current="page" 
                    onMouseEnter={(event) => {
                        setHoveringTab('products')
                        setUpdatePage(true)
                    }}
                    onMouseLeave={(event) => {
                        setHoveringTab('none')
                        setUpdatePage(true)
                    }}
                    onClick={(event) => {
                        setSelectedTab('products')
                        setUpdatePage(true)
                    }}>
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Products
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class={highlightTab(selectedTab, hoveringTab, "customers")} aria-current="page" 
                    onMouseEnter={(event) => {
                        setHoveringTab('customers')
                        setUpdatePage(true)
                    }}
                    onMouseLeave={(event) => {
                        setHoveringTab('none')
                        setUpdatePage(true)
                    }}
                    onClick={(event) => {
                        setSelectedTab('customers')
                        setUpdatePage(true)
                    }}>
                    <svg class="bi me-2" width="16" height="16"></svg>
                    Customers
                    </a>
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
import './Navbar.css'
import { ChevronLeft, ChevronRight, Search, Settings } from '@mui/icons-material'

export default function Navbar() {
    return (
        <div id="navbar">
            <div id="nav-menu-icon"></div>
            <div id="nav-left-fold">
                <ChevronLeft className='navbar-icon' />
                <ChevronRight id='right-icon' className='navbar-icon' />
            </div>
            <div id="nav-right-fold">
                <div id="nav-search">
                    <div id="nav-search-icon" onClick={() => {
                      document.getElementById('nav-search-input').focus();
                    }}><Search /></div>
                    <input type="text" placeholder='Search' id='nav-search-input' />
                </div>
                <div id="nav-profile">
                    <Settings id='settings-icon' className='navbar-icon' />
                </div>
            </div>
        </div>
    )
}

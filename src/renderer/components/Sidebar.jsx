import './Sidebar.css'
import { Help, Home } from '@mui/icons-material';

export default function Sidebar() {
    function handleIconClick(button) {
        console.log(button);
    }
    return (
        <div id="sidebar">
            <div id="top-icons">
                <div className="icon-div" id="home-icon" onClick={handleIconClick("home")}>
                    <Home />
                    <p>Home</p>
                </div>
            </div>
            <div id="bottom-icons">
                <div className="icon-div" id="help-icon" onClick={handleIconClick("help")}>
                    <Help />
                    <p>Help</p>
                </div>
            </div>
        </div>
    )
}

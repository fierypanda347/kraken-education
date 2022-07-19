import './Sidebar.css'
import { Help, Home } from '@mui/icons-material';
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
      <div id="sidebar">
        <div id="top-icons">
          <Link to="/">
            <div className="icon-div" id="home-icon">
              <Home />
              <p>Home</p>
            </div>
          </Link>
        </div>
        <div id="bottom-icons">
          <div className="icon-div" id="help-icon">
            <Help />
            <p>Help</p>
          </div>
        </div>
      </div>
    )
}

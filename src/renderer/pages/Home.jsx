import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page" id="home">
      <div id="class-container">
        <div id="class-container-header">
          <h1 id="class-container-title">Your Classes</h1>
            <Link to="/add-class">
              <button id="add-class-button">+&nbsp;Add Class</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

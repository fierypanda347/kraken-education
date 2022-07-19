import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page" id="home">
      <div id="class-container">
<<<<<<< Updated upstream
        <div id="class-container-header">
          <h1 id="class-container-title">Your Classes</h1>
          <button id="add-class-button">+&nbsp;Add Class</button>
        </div>
=======
<<<<<<< Updated upstream
        <h1 id="class-container-title">Your Classes</h1>
=======
        <div id="class-container-header">
          <h1 id="class-container-title">Your Classes</h1>
            <Link to="/add-class">
              <button id="add-class-button">+&nbsp;Add Class</button>
            </Link>
        </div>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
      </div>
    </div>
  )
}

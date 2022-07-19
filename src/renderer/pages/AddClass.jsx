import './AddClass.css'

export default function AddClass() {
  return (
    <div id="add-class" className="page">
      <div id="add-class-container">
        <h1 id="add-class-title">Add Class</h1>
        <p id="add-class-description">Add a new class to your database</p>
        <form id="add-class-form">
          <input
            type="text"
            id="class-name-input"
            placeholder='Class Name'
            className='add-class-input'
          />
          <input
            type="number"
            id="student-number-input"
            placeholder='Number of Students'
            className='add-class-input'
          />
          <button type='submit' id='add-class-submit-btn'>Add Class to Database</button>
        </form>
      </div>
    </div>
  )
}

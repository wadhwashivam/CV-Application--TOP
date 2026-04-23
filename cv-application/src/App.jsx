import './App.css'
import PersonalInfo from './components/PersonalInfo'
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'
import {Result as Resume}  from './components/Result'

function App() {
  return (
    <>
     <PersonalInfo />
     <EducationInfo />
     <ExperienceInfo />

    <div class = "btnDiv">
      <button class='mainBtn'>Edit</button>
      <button class='mainBtn'>Submit</button>
    </div>
    <Resume />
    </>
  )
}

export default App

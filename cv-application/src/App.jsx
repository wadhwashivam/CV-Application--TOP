
import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'
import {Result as Resume}  from './components/Result'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [educationInfo, setEducationInfo] = useState({
    schoolName: '',
    studyTitle: '',
    studyDate: '',
  });
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: '',
    positionTitle: '',
    jobDuties: '',
    dateBegin: '',
    dateEnding: '',
  });

  return (
    <>
     <PersonalInfo data = {personalInfo} setData = {setPersonalInfo}/>
     <EducationInfo data = {educationInfo} setData = {setEducationInfo}/>
     <ExperienceInfo data = {experienceInfo} setData = {setExperienceInfo}/>

    <div className = "btnDiv">
      <button className='mainBtn'>Edit</button>
      <button className='mainBtn'>Submit</button>
    </div>
    <Resume personal = {personalInfo} education = {educationInfo} experience = {experienceInfo}/>
    </>
  )
}

export default App

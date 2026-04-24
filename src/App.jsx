
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

  const [showResult, setShowResult] = useState(false);

  function handleShowResult(){
    setShowResult(true);
  }

  function handleEdit(){
    setShowResult(false);
  }

  return (
    <>
    {showResult === false ? (
      <>
        <PersonalInfo data = {personalInfo} setData = {setPersonalInfo}/>
        <EducationInfo data = {educationInfo} setData = {setEducationInfo}/>
        <ExperienceInfo data = {experienceInfo} setData = {setExperienceInfo}/>
        <button className='mainBtn' onClick={handleShowResult}>Submit</button>
      </>
    ): (
      <>
        <Resume personal = {personalInfo} education = {educationInfo} experience = {experienceInfo}/>
        <button className='mainBtn' onClick={handleEdit}>Edit</button>
      </>
    )}
    </>
)
}
export default App

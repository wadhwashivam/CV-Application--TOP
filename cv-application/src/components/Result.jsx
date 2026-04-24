function Result({personal, education, experience}){
    return (
        <>
        <h1>Resume</h1>
        <div className = "personalInfo">
            <h2>Personal Info</h2>
            <p>Name: {personal.name}</p>
            <p>Email: {personal.email}</p>
            <p>Phone: {personal.phone}</p>
        </div>

        <div className="educationInfo">
            <h2>Education Info</h2>
            <p>School Name: {education.schoolName}</p>
            <p>Study Title: {education.studyTitle}</p>
            <p>Study Date: {education.studyDate}</p>
        </div>

        <div className="experienceInfo">
            <h2>Experience Info</h2>
            <p>Company Name: {experience.companyName}</p>
            <p>Position Title: {experience.positionTitle}</p>
            <p>Job Duties: {experience.jobDuties}</p>
            <p>Date Begin: {experience.dateBegin}</p>
            <p>Date Ending: {experience.dateEnding}</p>
        </div>
        </>
    )
}

export {Result}
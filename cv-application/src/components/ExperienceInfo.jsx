export default function ExperienceInfo(){
    return (
        <>
        <h1>Experience Info</h1>
         <form action="submit">
            <label for="companyName">Company Name: </label>
            <input type="text" name="companyName" id="companyName" />
            <br />
            <label for="positionTitle">Position Title: </label>
            <input type="text" name="positionTitle" id="positionTitle" />
            <br />
            <label for="jobDuties">Job Duties: </label>
            <textarea type="text" name="jobDuties" id="jobDuties" />
            <br />
            <label for="dateBegin">From: </label>
            <input type="date" name="dateBegin" id="dateBegin" />
            <br />
            <label for="dateEnding">To: </label>
            <input type="date" name="dateEnding" id="dateEnding" />
            
        </form>
        </>
    )
}
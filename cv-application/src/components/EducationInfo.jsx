export default function EducationInfo(){
    return (
        <>
        <h1>Education Info</h1>
         <form action="submit">
            <label for="schoolName">School Name: </label>
            <input type="text" name="schoolName" id="schoolName" />
            <br />
            <label for="studyTitle">Study Title: </label>
            <input type="text" name="studyTitle" id="studyTitle" />
            <br />
            <label for="studyDate">Date of Study: </label>
            <input type="date" name="studyDate" id="studyDate" maxLength= {10} />
        </form>
        </>
    )
}
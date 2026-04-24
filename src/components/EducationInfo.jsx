export default function EducationInfo({data, setData}){
    return (
        <>
        <h1>Education Info</h1>
         <form onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="schoolName">School Name: </label>
            <input type="text" name="schoolName" id="schoolName" value={data.schoolName} onChange={(e) => setData({...data, schoolName: e.target.value})}/>
            <br />
            <label htmlFor="studyTitle">Study Title: </label>
            <input type="text" name="studyTitle" id="studyTitle" value={data.studyTitle} onChange={(e) => setData({...data, studyTitle: e.target.value})}/>
            <br />
            <label htmlFor="studyDate">Date of Study: </label>
            <input type="date" name="studyDate" id="studyDate" value={data.studyDate} onChange={(e) => setData({...data, studyDate: e.target.value})}/>
        </form>
        </>
    )
}
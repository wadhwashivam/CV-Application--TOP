export default function ExperienceInfo({data, setData}){
    return (
        <>
        <h1>Experience Info</h1>
         <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="companyName">Company Name: </label>
            <input type="text" name="companyName" id="companyName" value = {data.companyName} onChange={(e) => setData({...data, companyName: e.target.value})}/>
            <br />
            <label htmlFor="positionTitle">Position Title: </label>
            <input type="text" name="positionTitle" id="positionTitle" value = {data.positionTitle} onChange={(e) => setData({...data, positionTitle: e.target.value})}/>
            <br />
            <label htmlFor="jobDuties">Job Duties: </label>
            <textarea type="text" name="jobDuties" id="jobDuties" value = {data.jobDuties} onChange={(e)=> setData({...data, jobDuties: e.target.value})}/>
            <br />
            <label htmlFor="dateBegin">From: </label>
            <input type="date" name="dateBegin" id="dateBegin" value = {data.dateBegin} onChange={(e) => setData({...data, dateBegin: e.target.value})}/>
            <br />
            <label htmlFor="dateEnding">To: </label>
            <input type="date" name="dateEnding" id="dateEnding" value = {data.dateEnding} onChange={(e)=> setData({...data, dateEnding: e.target.value})}/>
            
        </form>
        </>
    )
}
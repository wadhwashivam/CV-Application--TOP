export default function PersonalInfo({data, setData}){
    return (
        <>
        <h1>Personal Info</h1>
        <form onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
            <br />
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            <br />
            <label htmlFor="phone">Phone Number: </label>
            <input type="tel" name="phone" id="phone" maxLength= {10} value={data.phone} onChange={(e) => setData({...data, phone: e.target.value})}/>
        </form>
        </>
    )
}
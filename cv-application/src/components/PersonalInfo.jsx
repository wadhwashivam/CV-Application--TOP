export default function PersonalInfo(){
    return (
        <>
        <h1>Personal Info</h1>
        <form action="submit">
            <label for="name">Name: </label>
            <input type="text" name="name" id="name" />
            <br />
            <label for="email">Email: </label>
            <input type="email" name="email" id="email" />
            <br />
            <label for="phoneNumber">Phone Number: </label>
            <input type="number" name="phoneNumber" id="phoneNumber" maxLength= {10} />
        </form>
        </>
    )
}
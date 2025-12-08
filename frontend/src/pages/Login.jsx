export function Login(){
    return(
        <>
            <form action="localhost:5000/api/users" method="post">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <label htmlFor="phone">Phone</label>
                <input type="number" name="phone" id="phone" />
                <label htmlFor="role">Role</label>
                <input type="text" name="role" id="role" />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
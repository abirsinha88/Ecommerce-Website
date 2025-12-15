import { useState } from "react"
export function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ email, password })
    });
    //console.log("form submitted");
    if (res.ok) {
     
      window.location.href = "/";
    } else {
      console.error("Login failed");
    }
    };


    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e)=>{
                    setEmail(e.target.value); }}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(e)=>{
                    setPassword(e.target.value); }}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
import { useState } from "react";
export default function Form() {
    
    // let [fullName, setFullName] = useState("Akshara");
    // let [username, setUsername] = useState("akshara123");
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    });

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // };
    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // };

    let handleInputChange = (event) => { 
        setFormData((currData) => {
            // currData[fieldName] = newValue;
            return {...currData, [event.target.name]: event.target.value};
        });
    };
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Form In React</h1> 
            <label htmlFor="fullName">Full Name</label>
            <input 
               placeholder="enter full name"
               type="text"
               value={formData.fullName}              
               id="fullName"
               name="fullName"
               onChange={handleInputChange}
            />
            <br></br><br></br>
            <label htmlFor="username">Username</label>
            <input 
               placeholder="enter username"
               type="text"
               value={formData.username}
            
               id="username"
               name="username"
               onChange={handleInputChange}
            />
                 <br></br><br></br>
            <label htmlFor="password">Password</label>
            <input 
               placeholder="enter password"
               type="password"
               value={formData.password}
               id="password"
               name="password"
               onChange={handleInputChange}
            />
            <br></br><br></br>
            <button >Submit</button>
        </form>
    );
    

}
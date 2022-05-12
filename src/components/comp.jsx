import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");
    const [errorfname, setErrorfname] = useState("");
    const [errorlname, setErrorlname] = useState("");
    const [erroremail, setErroremail] = useState("");
    const [errorpassword, setErrorpassword] = useState("");
    const [errorpassconf, setErrorpassconf] = useState("");
    

    const createUser = (e) => {
        e.preventDefault();
    setErrorfname("")
    setErrorlname("")
    setErroremail("")
    setErrorpassconf("")
    setErrorpassword("")
        let check = false

        if (firstname.length < 2) {
            setErrorfname('first name needs to be 2 characters long')
            check = true
        }
        if (lastname.length < 2) {
            setErrorlname('last name needs to be 2 characters long')
            check = true
        }
        if (email.length < 5) {
            setErroremail('email needs to be 5 characters long')
            check = true
        }
        if (password.length < 8) {
            setErrorpassword('password needs to be 8 characters long')
            check = true
        }
        if (password !== confirmpassword) {
            setErrorpassconf('passwords must match')
            check = true
        }
        if (check === false) {
            const newUser = { firstname, lastname, email, password, confirmpassword };
            console.log("Welcome", newUser);
        }
        
        
    };
    
    return(
    <div>
        <form onSubmit={ createUser }>
            {
                errorfname ? 
                <h3>{errorfname}</h3> :
                <h3>{errorfname}</h3>
            }
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
{
                errorlname ? 
                <h3>{errorlname}</h3> :
                <h3>{errorlname}</h3>
            }
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
{
                erroremail ? 
                <h3>{erroremail}</h3> :
                <h3>{erroremail}</h3>
            }
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            {
                errorpassword ? 
                <h3>{errorpassword}</h3> :
                <h3>{errorpassword}</h3>
            }
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            {
                errorpassconf ? 
                <h3>{errorpassconf}</h3> :
                <h3>{errorpassconf}</h3>
            }
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>

</div>
    );
};
    
export default UserForm;

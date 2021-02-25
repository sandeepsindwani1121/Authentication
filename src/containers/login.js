import React,{useState} from 'react'

export default function Login({setToken}) {

       const [username, setusername] = useState('')
       const [password, settpassword]= useState('')

       function onSubmit(e){
        e.preventDefault();
         console.log(username);
         console.log(password);
         const token="1234567890"; 
         saveToken(token);
         setToken(token);
       }

       function saveToken(token){
          localStorage.setItem("token",token);
       }

    



    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <label>User Name</label>
                <input type="text" name="name" onChange={e=>setusername(e.target.value)}  />
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="text" name="password" onChange={e=>settpassword(e.target.value)}  />
                </div>
                <div className="form-group">
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

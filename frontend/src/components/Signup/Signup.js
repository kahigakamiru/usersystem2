import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

function Signup() {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      });
    
  const submit = async (e) => {
    e.preventDefault();

    await axios
        .post("http://localhost:9000/registration", {
          username: data.username,
          email: data.email,
          password: data.password,
          confirmpassword: data.confirmpassword,
        })
        .then((res) => {
          console.log(res.data);
        });
  };
  const handle = (e) => {
    const newDetails = { ...data };
    newDetails[e.target.id] = e.target.value;
    setData(newDetails);
  };
    return (
        <div>
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                <label>First name</label>
                <input  className="form-control" id="username" onChange={(e) => handle(e)} value={data.username} type="text" placeholder="enter Firstname" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input  className="form-control" id="username" onChange={(e) => handle(e)} value={data.username} type="text" placeholder="enter Lastname" />

                </div>

                <div className="form-group">
                    <label>Email address</label>
                   <input type="email" className="form-control" id="email" onChange={(e) => handle(e)} value={data.email}  type="text"  placeholder="enter email"  />
                
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input  type="password" className="form-control" id="password" onChange={(e) => handle(e)}  value={data.password}     placeholder="enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <Link  to ="/sign-in">
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
                </Link>
            </form>

        </div>
    )
}

export default Signup
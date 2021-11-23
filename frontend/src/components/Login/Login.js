import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
      });
      const [err, setErr] = useState("")
    
  const submit = async (e) => {
    e.preventDefault();

    await axios
        .post("http://localhost:4000/api/users/signin", {
        
          email: data.email,
          password: data.password,
          
        })
        .then((res) => {
          console.log(res.data.token);
        }).catch((err) => {
            console.log(err.response.data.message);
            setErr(err.response.data.message)
        });
  };
  const handle = (e) => {
    const newDetails = { ...data };
    newDetails[e.target.id] = e.target.value;
    setData(newDetails);
  };
    return (
        <div>
             <form onSubmit={submit}>
                 {err && <p>{err}</p>}
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="email" onChange={(e) => handle(e)} value={data.email}  type="text"  placeholder="enter email"  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input  type="password" className="form-control" id="password" onChange={(e) => handle(e)}  value={data.password}     placeholder="enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
               <Link to="/sign-up">
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                </Link>
            </form>
        </div>
    )
}

export default Login
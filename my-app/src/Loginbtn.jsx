import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Loginbtn = () => {
    const navigate = useNavigate();
  const [login, setlogin] = useState({
    Email: "",
    Password: ""
  });


  const MyLogin = async (e) => {
    e.preventDefault();
    console.log(login);
    try {
      const res = await axios.post("http://localhost:3000/loginform", login)
      console.log(res.data)
      alert(res.data.message)

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.userName);
      localStorage.setItem("userEmail", res.data.userEmail);
      navigate("/");

    }
    catch (err) {
      console.log("err.response.data")
      alert("err.response.data")
    }


  };
  return (
    <>

      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
          background: "#f4f6f9"
        }}
      >
        <form onSubmit={MyLogin}
          className="bg-white p-5 rounded shadow"
          style={{
            width: "100%",
            maxWidth: "500px"
          }}
        >
          <h2 className="text-center text-primary mb-4">
            Login Form
          </h2>

          {/* Email */}
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form2Example1"
              className="form-control form-control-lg"
              placeholder="Enter Email"

              onChange={(e) => { setlogin({ ...login, Email: e.target.value }) }}
            />
            <label className="form-label mt-2">
              Email address
            </label>
          </div>

          {/* Password */}
          <div className="form-outline mb-4">
            <input
              type="password"
              id="form2Example2"
              className="form-control form-control-lg"
              placeholder="Enter Password"
              onChange={(e) => { setlogin({ ...login, Password: e.target.value }) }}
            />
            <label className="form-label mt-2">
              Password
            </label>
          </div>

          {/* Remember + Forgot */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="form2Example31"
                />
                <label
                  className="form-check-label"
                  htmlFor="form2Example31"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div className="col text-end">
              <Link to="#!" className="text-decoration-none">
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 mb-4"
          >
            Sign in
          </button>

          {/* Register */}
          <div className="text-center">
            <p>
              Not a member?{" "}
              <Link href="#!" className="text-decoration-none">
                Register
              </Link>
            </p>


          </div>
        </form>
      </div>
    </>
  )
}

export default Loginbtn
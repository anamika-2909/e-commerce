import React, { useState } from 'react'

const Login = () => {

    const [name, setname] = useState("");
    const [Email, setEmail] = useState("");
    const [Lastname, setLastname] = useState("");
    const [password, setpassword] = useState("");

    const Myfunction = (e) => {
        e.preventDefault();

        console.log("FirstName:", name);
        console.log("LastName:", Lastname);
        console.log("Email:", Email);
        console.log("Password:", password);
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
                <form
                    onSubmit={Myfunction}
                    className="p-5 shadow bg-white rounded"
                    style={{
                        width: "100%",
                        maxWidth: "700px"
                    }}
                >
                    <h2 className="text-center mb-4 text-primary">
                        Registration Form
                    </h2>

                    {/* First Name */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingFirstName"
                            placeholder="First Name"
                            onChange={(e) => {
                                setname(e.target.value);
                            }}
                        />
                        <label>First Name</label>
                    </div>

                    {/* Last Name */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingLastName"
                            placeholder="Last Name"
                            onChange={(e) => {
                                setLastname(e.target.value);
                            }}
                        />
                        <label>Last Name</label>
                    </div>

                    {/* Email */}
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingEmail"
                            placeholder="name@example.com"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <label>Email address</label>
                    </div>

                    {/* Password */}
                    <div className="form-floating mb-4">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                        />
                        <label>Password</label>
                    </div>

                    {/* Button */}
                    <div className="d-grid">
                        <button
                            className="btn btn-primary btn-lg"
                            type="submit"
                        >
                            Submit Form
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
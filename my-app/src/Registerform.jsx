import React, { useState } from 'react'
import axios from 'axios'

const Registerform = () => {
    const [form, setform] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        Password: ""

    });

    const Myfunction = async (e) => {
        e.preventDefault();
        console.log(form);
        try {
            const res = await axios.post("http://localhost:3000/registerform", form)
            console.log(res.data)
            alert(res.data)
        }
        catch (err) {
            console.log(err.response.data);
            alert(err.response.data);
        }
    };
    return (
        <>
            <form
                onSubmit={Myfunction}
                className="p-5 shadow bg-white rounded"
                style={{
                    width: "100%",
                    maxWidth: "700px"
                }}>

                <h2 className="text-center mb-4 text-primary">
                    Registration Form
                </h2>

                <div className="form-floating mb-3">

                    <input type="text" className="form-control"
                        id="floatingFirstName"
                        placeholder="First Name" onChange={(e) => { setform({ ...form, Firstname: e.target.value }) }} />
                    <label>First Name:</label>
                </div>

                <div className="form-floating mb-3">

                    <input type="text" className="form-control"
                        id="floatingFirstName"
                        onChange={(e) => { setform({ ...form, Lastname: e.target.value }) }} />
                    <label>Last Name:</label>
                </div>

                <div className="form-floating mb-3">

                    <input type="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="name@example.com" onChange={(e) => { setform({ ...form, Email: e.target.value }) }} />
                    <label>Email address</label>
                </div>

                <div className="form-floating mb-4">

                    <input type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password" onChange={(e) => { setform({ ...form, Password: e.target.value }) }} />
                    <label>Password</label>
                </div>

                <button
                    className="btn btn-primary btn-lg"
                    type="submit" >
                    Submit Form
                </button>
            </form>

        </>
    )
}

export default Registerform
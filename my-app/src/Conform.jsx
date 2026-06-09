import axios from 'axios';
import React, { useState } from 'react'

const Contactform = () => {
    const [contact, setcontact] = useState({
        Email: "",
        Password: "",
        Address: "",
        Phone: "",
        City: "",
        Zip: ""
    });

    const MyContact = async (e) => {
        e.preventDefault();
        console.log(contact);
        try {
            const ans = await axios.post("http://localhost:3000/conatctform",contact)
            console.log(ans.data)
            alert(ans.data)
        }
        catch (err) {
           console.log(err)
           alert("Error user form")
        }

    }

    return (
        <>
            <form
            onSubmit={MyContact}
                className="container mt-5 p-5 shadow-lg rounded"
                style={{
                    maxWidth: "750px",
                    background: "linear-gradient(to right, #ffffff, #f8f9fa)",
                    border: "1px solid #ddd"
                }}
            >

                <h1
                    className="text-center mb-4"
                    style={{
                        fontWeight: "bold",
                        color: "#0d6efd",
                        letterSpacing: "1px"
                    }}
                >
                    Contact Us
                </h1>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <label className="form-label fw-bold">Email</label>
                        <input
                            type="email"
                            className="form-control p-2"
                            placeholder="Enter your email"
                            style={{ borderRadius: "10px" }}
                            onChange={(e) => {
                                setcontact({ ...contact, Email: e.target.value })
                            }}
                        />
                    </div>

                    <div className="col-md-6 mb-4">
                        <label className="form-label fw-bold">Password</label>
                        <input
                            type="password"
                            className="form-control p-2"
                            placeholder="Enter password"
                            style={{ borderRadius: "10px" }}
                            onChange={(e) => {
                                setcontact({ ...contact, Password: e.target.value })
                            }}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="form-label fw-bold">Address</label>
                    <input
                        type="text"
                        className="form-control p-2"
                        placeholder="1234 Main St"
                        style={{ borderRadius: "10px" }}
                        onChange={(e) => {
                            setcontact({ ...contact, Address: e.target.value })
                        }}
                    />
                </div>

                <div className="mb-4">
                    <label className="form-label fw-bold">Phone</label>
                    <input
                        type='tel'
                        className="form-control p-2"
                        placeholder="10 digit number enter"
                        style={{ borderRadius: "10px" }}
                        onChange={(e) => {
                            setcontact({ ...contact, Phone: e.target.value })
                        }}
                    />
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <label className="form-label fw-bold">City</label>
                        <input
                            type="text"
                            className="form-control p-2"
                            placeholder="Enter city"
                            style={{ borderRadius: "10px" }}
                            onChange={(e) => {
                                setcontact({ ...contact, City: e.target.value })
                            }}
                        />
                    </div>

                    <div className="col-md-4 mb-4">
                        <label className="form-label fw-bold">State</label>
                        <select
                            className="form-control p-2"
                            style={{ borderRadius: "10px" }}
                            onChange={(e) => {
                                setcontact({ ...contact, State: e.target.value })
                            }}
                        >
                            <option>Choose...</option>
                            <option>Gujarat</option>
                            <option>Maharashtra</option>
                            <option>Rajasthan</option>
                        </select>
                    </div>

                    <div className="col-md-2 mb-4">
                        <label className="form-label fw-bold">Zip</label>
                        <input
                            type="text"
                            className="form-control p-2"
                            placeholder="380001"
                            style={{ borderRadius: "10px" }}
                            onChange={(e) => {
                                setcontact({ ...contact, Zip: e.target.value })
                            }}
                        />
                    </div>
                </div>

                <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="check" />
                    <label className="form-check-label fw-semibold" htmlFor="check">
                        I agree to terms & conditions
                    </label>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary w-100 p-2"
                    style={{
                        borderRadius: "12px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        transition: "0.3s"
                    }}
                >
                    Create Account
                </button>

            </form>
        </>
    )
}

export default Contactform
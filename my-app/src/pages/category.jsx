import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Clist from '../CList';

const Category = () => {
    const [formData, setFormData] = useState({
        cName: "",
        description: "",
        cimage: "",
        status: ""
    });

    const Myproduct = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const data = new FormData()
            data.append("cName", formData.cName)
            data.append("description", formData.description)
            data.append("cimage", formData.cimage)
            data.append("status", formData.status)
            const res = await axios.post("http://localhost:3000/api/category", data)
            alert(res.data)

        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <>

            <div
                className="d-flex justify-content-between align-items-center px-5 py-3"
                style={{ background: "#dfede8" }}>
                <h2 style={{ color: "#1c5c4c", fontWeight: "bold" }}>
                    Category
                </h2>

                <div>
                    <NavLink
                        to="showcard"
                        className={({ isActive }) =>
                            `btn px-4 ${isActive ? "text-white" : ""
                            }`
                        }
                        style={({ isActive }) => ({
                            backgroundColor: isActive ? "#1c5c4c" : "#e6f0ed",
                            borderRadius: "10px"
                        })}
                    >
                       Show
                    </NavLink>
                </div>
            </div>
            <div className="container mt-5">
                <div className="card shadow p-4 mx-auto " style={{ width: "800px" }}>
                    <h2 className="text-center mb-4">Category Information</h2>
                    <form onSubmit={Myproduct} action="/uplode" method="post" encType="multipart/form-data">
                        <div className="mb-3">
                            <label className="form-label">Category Name</label>
                            <input type="text" className="form-control"
                                value={formData.cName}
                                onChange={(e) => {
                                    setFormData({ ...formData, cName: e.target.value })
                                }} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Category Description</label>
                            <textarea className="form-control"
                                value={formData.description}
                                onChange={(e) => {
                                    setFormData({ ...formData, description: e.target.value })
                                }}></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Category Image</label>
                            <input
                                type="file"
                                className="form-control"
                                name="Image"
                                onChange={(e) => {
                                    setFormData({ ...formData, cimage: e.target.files[0] })
                                }}
                            />
                        </div>

                        {/* <div className="mb-3">
                            <label className="form-label">Status</label>
                            <input type="number" className="form-control"
                                value={formData.status}
                                onChange={(e) => {
                                    setFormData({ ...formData, status: e.target.value })
                                }} />
                        </div> */}

                        <div className="div">
                            <label className="form-label">Status</label>
                            <select
                                name="status"
                                value={formData.status}
                                onChange={(e) => {
                                    setFormData({ ...formData, status: e.target.value })
                                }}>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>


                        <button className="btn btn-primary w-100">
                            Add Category
                        </button>
                    </form>
                </div >
            </div >
            <Clist/>
        </>
    )
}

export default Category
import axios from 'axios';
import React, { useState } from 'react'

const Mproduct = () => {
    const [formData, setFormData] = useState({
        productName: "",
        description: "",
        image: "",
        price: ""
    });

    const Myproduct = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const data = new FormData()
            data.append("productName", formData.productName)
            data.append("description", formData.description)
            data.append("image", formData.image)
            data.append("price", formData.price)
            const res = await axios.post("http://localhost:3000/api/manageproduct", data)
            alert(res.data)

        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <div className="container mt-5">
                <div className="card shadow p-4 mx-auto " style={{ width: "800px" }}>
                    <h2 className="text-center mb-4">Manage Product</h2>
                    <form onSubmit={Myproduct} action="/uplode" method="post" encType="multipart/form-data">
                        <div className="mb-3">
                            <label className="form-label">Product Name</label>
                            <input type="text" className="form-control"
                                value={formData.productName}
                                onChange={(e) => {
                                    setFormData({ ...formData, productName: e.target.value })
                                }} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Product Description</label>
                            <textarea className="form-control"
                                value={formData.description}
                                onChange={(e) => {
                                    setFormData({ ...formData, description: e.target.value })
                                }}></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Product Image</label>
                            <input
                                type="file"
                                className="form-control"
                                name="ProductImage"
                                onChange={(e) => {
                                    setFormData({ ...formData, image: e.target.files[0] })
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Product Price</label>
                            <input type="number" className="form-control"
                                value={formData.price}
                                onChange={(e) => {
                                    setFormData({ ...formData, price: e.target.value })
                                }} />
                        </div>

                        <button className="btn btn-primary w-100">
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Mproduct
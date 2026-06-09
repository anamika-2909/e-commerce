import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Productlist = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/product");
            console.log(res.data)
            setData(res.data);
        }
        catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Product List</h2>

                <div className="table-responsive shadow rounded mb-5">
                    <table className="table table-striped table-hover table-bordered text-center align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>


                                    <td>
                                        <button className="btn btn-warning btn-sm me-2">
                                            Edit
                                        </button>

                                        <button className="btn btn-danger btn-sm">
                                            Delete
                                        </button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default Productlist





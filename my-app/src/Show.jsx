import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Show = () => {
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
            <div className="row gap-3 d-flex justify-content-center mt-5">
                {data.map((item) => {
                    return (
                        <>
                            <div className="card  " key={item._id} style={{ width: "18rem" }}>
                                <img src={`http://localhost:3000/upload/${item.image}`} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.productName}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text">{item.price}</p>

                                </div>
                            </div>


                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Show
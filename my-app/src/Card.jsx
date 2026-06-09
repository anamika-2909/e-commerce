import React from 'react'
import Button from './Button'

const Card = ({ name, image }) => {

    const List = [
        {
            id: 1,
            title: "Nature image",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, amet!",
            images: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=2210&quality=70"

        },
        {
            id: 2,
            title: "Summer image",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, amet!",
            images: "https://thumbs.dreamstime.com/b/beautiful-sea-summer-landscape-season-nature-background-304480988.jpg"

        },
        {
            id: 3,
            title: "Monsoon image",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, amet!",
            images: "https://img.magnific.com/free-photo/weather-effects-composition_23-2149853295.jpg?semt=ais_hybrid&w=740&q=80"

        },
        {
            id: 4,
            title: "Mountain image",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, amet!",
            images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9h4fU35Nb2lGTCcT-GS1pVkWd5gqV0yegw&s"

        },
        {
            id: 5,
            title: "Winter image",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, amet!",
            images: "https://img.magnific.com/free-photo/amazing-mountains-morning-sunlight-carpathian-ukraine-europe_146671-14065.jpg?semt=ais_hybrid&w=740&q=80"

        }
    ]
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                {List?.map((data) => {
                            return (
                                <>
                                   <div className="col-lg-2">
                                     < div className="card" style={{ width: "18rem" }} key={data.id}>
                                        <img src={data.images} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">{data.Description}</p>

                                        </div>
                                        <Button title="view more" className={" btn-success"} />
                                    </div>
                                   </div>
                                </>
                            )
                        })}
                    
                </div>
            </div>

            {/* <div className="card" style={{width: "18rem"}}>
                <img src={image} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>

                    </div>
                    <Button title="view more" className={" btn-success"}/>
            </div> */}
        </>
    )
}

export default Card
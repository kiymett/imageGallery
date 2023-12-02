import React from 'react'
import "./Card.css"

const Card = ({data}) =>{
    console.log(data)
    return(
        <div className="pictures">
            {data.map(({ photographer, src}) => (
            <div key={src.large} className="picture">
                <div className="imageContainer">
                    <img src={src.large} alt="portre" width = "100px" />
                </div>
                <div className="info">
                  <h2>{photographer}</h2>
              </div>
            </div>
      ))}
        </div>
    )
}
export default Card
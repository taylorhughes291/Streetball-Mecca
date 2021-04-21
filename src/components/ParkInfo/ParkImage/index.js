import React from "react"
import "./styles.css"

const ParkImage = ({url, name}) => {
    const styleObj = {
        backgroundImage: 'url(' + url + ")"  
    }
    return (
        <section id="park-info-container" style={styleObj}>
            <div id="title">{name}</div>
        </section>
    )
}

export default ParkImage
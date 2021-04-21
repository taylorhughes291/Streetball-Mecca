import React from "react"
import Park from "./Park"
import "./styles.css"

const Parks = (props) => {
  const parks = props.parkData.map((item, index) => {
    return (
      <Park 
        name={item.name}
        color={item.color}
        overall={item.overall}
        key={index}
      />
    )
  })
  console.log(parks)
  return (
    <ul>
      {parks}
    </ul>
  )
}

export default Parks
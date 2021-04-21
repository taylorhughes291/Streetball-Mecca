import React from "react"
import "./styles.css"

const Park = ({name, color, overall}) => {
  const style = {
    borderColor: color
  }
  return (
    <li>
      <span className="parkName">{name}</span>
      <span className="rating" style={style}>{overall}</span>
    </li>
  )
}

export default Park
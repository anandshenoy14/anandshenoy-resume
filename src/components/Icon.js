import React from "react"

const Icon = ({type,link}) => (
    <div className="icon"><a href={link}><i data-feather={type}></i></a></div>
)

export default Icon
import React, { useState } from "react"

function Image({className,img}) {
    const [hovered,setHovered] = useState(false)
    return (
        <div onMouseLeave ={()=>{
            console.log("mouse hover leave")
            setHovered(false)
        }} onMouseOver={()=>{
            console.log("mouse hover enter")
            setHovered(true)
        }}className={`${className} image-container`}>
            {hovered && <i className="ri-heart-line favorite"></i>}
            {hovered&& <i className="ri-add-circle-line cart"></i>}
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

export default Image

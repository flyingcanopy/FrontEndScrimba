import React, { useContext } from "react"
import { context } from "../components/ContextProvider"


import Image from "../components/Image"
import {getClass} from "../utils"

/**
 * id: "1"
isFavorite: false
url:
 */
function Photos() {
    // Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />
    const {photos}  =  useContext(context)
    console.log(photos)
    const myPhotos = photos.map((photo,i)=>{
        return <Image key={photo.id} img={photo} className={getClass(i)}/>
    })
   // console.log("in photos " + photos[0].url)
    return (
        <main className="photos"> 
            {myPhotos}
        </main>
    )
}

export default Photos
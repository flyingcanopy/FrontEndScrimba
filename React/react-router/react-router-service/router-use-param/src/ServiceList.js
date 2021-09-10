import React from "react"
import {Link} from "react-router-dom"

const data = [
    {

        name:"lawn",
        _id: 1,
    },
    {

        name:"dog",
        _id: 2,
    },
]

function Service(props){
   return (<div>
 <Link to={`/service/${props.service._id}`}><h1> {props.service.name} --- {props.service._id}</h1> </Link>
   </div>)
}
function ServiceList(){
    
    return (<div>
        {data.map(service=><Service key={service._id} service={service}/>)}
    </div>)
}
export default ServiceList
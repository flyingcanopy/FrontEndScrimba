import React from "react";
import { useParams } from "react-router";
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

function ServiceDetails(){
    const {serviceId} = useParams()
    console.log(serviceId)
    const service = data.filter(service=>service._id===parseInt(serviceId))
    console.log(service)
    return (
        <h1>{service[0].name}</h1>
    )
}

export default ServiceDetails
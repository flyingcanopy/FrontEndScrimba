
import { Fragment } from "react"
import classes from './MeetupDetail.module.css'
export default function MeetupDetail(props) {
    return (
    <section className={classes.detail}>
    <h1>{props.title}</h1>
    <img src='https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/06/24498998325_f451c67aae_o.jpg'/>
    <address>{props.address}</address>
    <p>{props.description}</p>
    </section>)
}
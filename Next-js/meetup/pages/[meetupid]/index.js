 import { useRouter } from "next/router"
import MeetupDetail from "../../components/meetups/MeetupDetail"
 export default function Details(){
    const router = useRouter()
    //
    console.log(router.query.meetupid)
    return (<MeetupDetail src={'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/06/24498998325_f451c67aae_o.jpg'} description={'Football meetup'} address={'Charminar Rd, Char Kaman, Ghansi Bazaar, Hyderabad, Telangana 500002'} title={'Second meetup'}/>)
    
}
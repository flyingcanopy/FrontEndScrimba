


import MeetupList from "../components/meetups/MeetupList";

let DUMMY_MEETUPS = [
   
]
export default function HomePage(props){
    
    return <MeetupList meetups={props.meetups}/>
    
}
export async function getStaticProps(){
    //connect to db.. This code is executed during buildProcess i.e not oN the server or not on the client side of visitor 
    //pre-rendered during build process
      DUMMY_MEETUPS = [{
        id:'m1',
        title:'first meetup',
        image:'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/06/24498998325_f451c67aae_o.jpg',
        address:'Charminar Rd, Char Kaman, Ghansi Bazaar, Hyderabad, Telangana 500002',
        description:'this is our first meetup'

    },
    {
        id:'m2',
        title:'Second meetup',
        image:'https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/06/24498998325_f451c67aae_o.jpg',
        address:'Charminar Rd, Char Kaman, Ghansi Bazaar, Hyderabad, Telangana 500002',
        description:'this is our Second meetup'

    }]
    
    return {
        props:{
            meetups:DUMMY_MEETUPS
        }
    }
}
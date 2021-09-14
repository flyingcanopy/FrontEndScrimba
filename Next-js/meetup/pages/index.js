


import MeetupList from "../components/meetups/MeetupList";

let DUMMY_MEETUPS = [
   
]
export default function HomePage(props){
    
    return <MeetupList meetups={props.meetups}/>
    
}
/*
export async function getServerSideProps(context){
    //always run on the server after build/deployement 
    // runs for every incomming request // pre-generated 
    // need access to complete request
    // data changes frequently 
    const req = context.req
    const res = context.res
    //authentication etc
    return {
        props:{
            meetups:DUMMY_MEETUPS
        }
    }
}
*/
export async function getStaticProps(){
    //connect to db.. This code is executed during buildProcess i.e not oN the server or not on the client side of visitor 
    //pre-rendered during build process
    // Con : Data could be outdated.
    // If new data comes in pre-generated page would not know about the new data 
    // This could be a problem..
    // we could actually rebuild oursite when data changes.. generally in blogs data changes are very less
    // take advantage of caching .. cdn -cache 
    
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
            meetups:DUMMY_MEETUPS,
        },
        revalidate:10 // this will be generated every 10 seconds..  re-pregenerated on server after deployement..  so that we do not have to re-deploy / rebuild when new data comes
    }
}
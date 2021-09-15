import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient ,ObjectId} from "mongodb";
export default function Details(props) {
  console.log(props + " in component");
  return (
    <MeetupDetail
      src={props.meetupDetails.image}
      description={props.meetupDetails.description}
      address={props.meetupDetails.address}
      title={props.meetupDetails.title}
    />
  );
}
//only used if we are using getStaticProps
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.kmxup.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({},{_id:1}).toArray();
  const pathArray = meetups.map((meetup)=>{
    return   {
      params: {
        meetupid: meetup._id.toString(),
      },
    }
  })
  console.log(pathArray);
  client.close();
  return {
    fallback: 'blocking', // incase the page does not exist pre-generate that page
    paths:pathArray,
  };
}
export async function getStaticProps(context) {
  //fetch data from api
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.kmxup.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const meetupid = context.params.meetupid;
  console.log(meetupid + 'from context');
  const db =  client.db();
  const meetupsCollection =  db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({_id:ObjectId(meetupid)});
  console.log(selectedMeetup);
  client.close();


  return {
    props: {
      meetupDetails:{...selectedMeetup,
      _id:selectedMeetup._id.toString()
    },
    },
    revalidate: 10,
  };
}

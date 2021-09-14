import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";
export default function Details(props) {
  const router = useRouter();
  //
  console.log(router.query.meetupid);
  console.log(props);
  return (
    <MeetupDetail
      src={props.meetupDetails.src}
      description={props.meetupDetails.description}
      address={props.meetupDetails.address}
      title={props.meetupDetails.title}
    />
  );
}
//only used if we are using getStaticProps    
export async function getStaticPaths (){
    return {
        fallback:false, // return 404 if page does not exist..
        paths : [
            {
                params: {
                    meetupid:'m1',
                }
            },
            {
                params: {
                    meetupid:'m2',
                }
            }
        ]
    }

}
export async function getStaticProps(context) {
  //fetch data from api
  const meetupid = context.params.meetupid
  console.log(meetupid)
  return {
    props: {
      meetupDetails: {
        id : meetupid,
        src: "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/06/24498998325_f451c67aae_o.jpg",
        description: "Football meetup",
        address:
          "Charminar Rd, Char Kaman, Ghansi Bazaar, Hyderabad, Telangana 500002",
        title: "Second meetup",
      },
    }
  };
}

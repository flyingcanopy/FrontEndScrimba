import { MongoClient } from "mongodb";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import Head from 'next/head'

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title> React meetup</title>
        <meta name='description ' content =  'Browse huge list of react meetups'/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
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
export async function getStaticProps() {
  //connect to db.. This code is executed during buildProcess i.e not oN the server or not on the client side of visitor
  //pre-rendered during build process
  // Con : Data could be outdated.
  // If new data comes in pre-generated page would not know about the new data
  // This could be a problem..
  // we could actually rebuild oursite when data changes.. generally in blogs data changes are very less
  // take advantage of caching .. cdn -cache
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.kmxup.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 10, // this will be generated every 10 seconds..  re-pregenerated on server after deployement..  so that we do not have to re-deploy / rebuild when new data comes
  };
}

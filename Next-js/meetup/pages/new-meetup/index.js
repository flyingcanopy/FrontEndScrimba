
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
export default function NewMeetup(){
    function onAddMeetupHandler(meetupData){ console.log(meetupData)}
    return <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
}
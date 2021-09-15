//  /api/new-meetup
//  POST /api/new-meetup
import {MongoClient} from 'mongodb'
async function handler(req,res){
    if(req.method === 'POST'){
        const data = req.body
        //never run this on client-side
        const client = await MongoClient.connect(
            "mongodb+srv://admin:admin@cluster0.kmxup.mongodb.net/meetups?retryWrites=true&w=majority"
          );
        const db =  client.db();
        const meetupsCollection =  db.collection("meetups");
        const result = await meetupsCollection.insertOne(data)
        console.log(result)
        client.close()
        res.status(201).json ({
            message: '  meetup inserted '
        })
    }


}
export default handler
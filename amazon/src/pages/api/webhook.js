import { buffer } from "micro";
import * as admin from "firebase-admin";

//secure a connection to firebase from backend
const serviceAccount = require("../../../permissions.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

//establish connection to stripe

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const webHookSecret = process.env.STRIPE_SIGNING_SECRET;

const fullfillOrder = async (session) => {
  // full filling order
  console.log("full_fill_order");
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`Success:order ${session.id} has been added to the db`);
    });
};
export default async (req, res) => {
  if (req.method === "POST") {
    
    const buf = await buffer(req)
    const sig = req.headers["stripe-signature"]

    let event;

    

    //verify that the event posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(buf, sig, webHookSecret);
    } catch (err) {
      console.log("ERRORe" + err.message);
      return res.status(400).send(`Web Hook error : ${err.message}`);
    }

    // handle the checkout session completed event

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      //Full fill the order
      return fullfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`WebHook ERror: ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

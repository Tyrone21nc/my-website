import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = "contact-form-personal-website"; // My mongodb database name

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // if you at least one of the fields is still empty, it sends this 404 message
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "All fields required." }), { status: 400 });
    }

    // if that's not the case, it waits for the client to connect
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("submissions");    // then it sets the collection as the one in my MongoDB compass on my computer

    // then, when we get a valid input set, we use the MongoDB built in document insertion function, .insertOne
    await collection.insertOne({
      name,
      email,
      message,
      submittedAt: new Date(),  // and submits it with the date as well
    });

    // if it saved in the DB correctly
    return new Response(JSON.stringify({ message: "Message saved!" }), { status: 200 });

  }
  // if the try didn't work, this will catch the error
  catch (err) {
    console.error("Error:", err);
    return new Response(JSON.stringify({ message: "Server error" }), { status: 500 });
  }
}


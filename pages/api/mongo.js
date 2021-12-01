// import { MongoClient } from "mongodb";

// // Connection URL
// const url = process.env.MONGODB_URI;

// const client = new MongoClient(url);

// // Database Name
// const dbName = "questiongame";

// export async function  getMongodbQuestion(question) {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
//   const collection = db.collection("documents");

//   // the following code examples can be pasted here...

//   return "done.";
// }
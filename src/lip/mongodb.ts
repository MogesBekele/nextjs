import { MongoClient } from "mongodb";

const uri = process.env.mongo_url;
const options = {};

let client;
let clientPromise;

if (!process.env.mongo_uri) {
  throw new Error("please connect the uri");
}
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;

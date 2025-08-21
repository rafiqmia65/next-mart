import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNamesObj = {
  productsCollection: "products",
};

let client;

export default function dbConnect(collectionName) {
  if (!client) {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  }

  return client.db(process.env.DB_NAME).collection(collectionName);
}

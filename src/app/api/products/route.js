// app/api/products/route.js
import dbConnect, { collectionNamesObj } from "../../lib/dbConnect";

export async function GET(req) {
  try {
    const collection = dbConnect(collectionNamesObj.productsCollection);
    const products = await collection.find({}).toArray();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

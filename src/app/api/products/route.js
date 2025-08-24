// app/api/products/route.js
import dbConnect, { collectionNamesObj } from "../../../lib/dbConnect";

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

export async function POST(req) {
  try {
    const body = await req.json();
    const collection = dbConnect(collectionNamesObj.productsCollection);

    const result = await collection.insertOne(body);

    return new Response(
      JSON.stringify({ message: "Product added", id: result.insertedId }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Failed to add product:", err);
    return new Response(JSON.stringify({ error: "Failed to add product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

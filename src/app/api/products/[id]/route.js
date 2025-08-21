import dbConnect, { collectionNamesObj } from "../../lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const db = await dbConnect();
    const product = await db
      .collection(collectionNamesObj.products)
      .findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response(JSON.stringify({ message: "Not Found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (err) {
    console.error("Error:", err);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}

import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  } else if (request.method === "POST") {
    try {
      const productsData = request.body;
      await Product.create(jokeData);

      response.status(201).json({ message: "Product created." });
    } catch (error) {
      response.status(400).json({ message: error.message });
    }
  }
}

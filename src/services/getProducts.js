//import data from "./products.json";
import { dbConnect } from "../lib/database";
import Product from "../models/Products";

export const getProducts = async () => {
  await dbConnect();
  const data = await Product.find();
  return data.map(({ name, description, tags, price, category }) => ({
    name,
    description,
    tags,
    price,
    category,
  }));
};

/* export async function getProducts() {
  await dbConnect();
  const data = await Product.find("id");
  return data.map(({ name, description, tags, price, category }) => ({
    name,
    description,
    tags,
    price,
    category,
  })); */

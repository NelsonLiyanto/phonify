import { Db, ObjectId } from "mongodb";
import { getMongoClient } from "../config";
import { getDb } from "./users";

export type Product = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  image: string[];
  createdAt: string;
  updatedAt: string;
  stock: number;
  discounted: number | null;
  brand: string;
};

export type ProductInput = Omit<Product, "_id">;

const dbName = process.env.MONGODB_NAME;

export const getProducts = async () => {
  const productCollection = (await getDb()).collection("products");
  const products = await productCollection.find().toArray();
  return products;
};

export const getProductById = async (slug: string) => {
  const productCollection = (await getDb()).collection("products");
  const product = await productCollection.findOne({
    slug,
  });
  return product as Product;
};

import { config } from "dotenv";
import { MongoClient } from "mongodb";

config();

export const getDb = async () => {
  const client = new MongoClient(process.env.MONGO_URL!);
  await client.connect();
  return client.db("wish-lists");
};

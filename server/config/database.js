import mongoose from "mongoose";

const connectDB = async (url) => {
  if (typeof url !== "string") {
    console.error("Invalid db connection string");
    return;
  }

  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log(`MongoDB connected: ${url}`))
    .catch((err) => console.log(err.message));
};

export default connectDB;

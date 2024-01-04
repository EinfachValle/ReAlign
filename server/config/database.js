import mongoose from "mongoose";

const connectDB = async (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected: " + url))
    .catch((err) => console.log(err.message));
};

// const connectDB = async () => {
//   try {
//     const connection = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${connection.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

export default connectDB;

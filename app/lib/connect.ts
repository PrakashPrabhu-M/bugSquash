import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose.connect(
      `mongodb+srv://prakashprabhum:Ibjviqpedn6vTDpS@cluster0.xqifcvc.mongodb.net/bugSquash?retryWrites=true&w=majority`
    );
    const connection = mongoose.connection;
    connection.on("connection", (stream) => console.log("Connected to dB"));
    connection.on("error", (error) => console.log("error:", error));
  } catch (error) {
    console.log("error:", error);
  }
}

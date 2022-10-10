import mongoose from "mongoose";

const connection = async () => {
  const URL = "mongodb://localhost:27017/crud-app";

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected succesfully");
  } catch (error) {
    console.log("Error while connecting with databse", error);
  }
};
export default connection;

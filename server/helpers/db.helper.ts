import mongoose from "mongoose"

export const connectDatabase = async () => {
  mongoose
    .connect(process.env.MONGO_URI as string)
    .then((value) =>
      console.log(`MongoDB Connection Successful: ${value.connection.host}`)
    )
    .catch((error) => {
      console.log("MongoDB Connection Error:", error)
      process.exit(1)
    })
}

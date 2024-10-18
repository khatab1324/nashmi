import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: String,
  userOld: Number,
  password: String,
});

export default mongoose.model("User", UserSchema);

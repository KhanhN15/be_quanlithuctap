import mongoose from "mongoose";
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});
// export collection name 'users' storing login infomation
const User = mongoose.model("Users", accountSchema);
export default User;

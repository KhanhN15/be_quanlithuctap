import mongoose from "mongoose";
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  nameAss: {
    type: String,
    required: true,
  },
  linkFile: {
    type: String,
    required: true,
  },
  idStudent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  isOk: {
    type: String,
    default: false,
  },
  comment: {
    type: String,
    required: false,
  },
  point: {
    type: String,
    required: false,
  },
});
// export collection name 'users' storing login infomation
const Assignment = mongoose.model("Assignment", assignmentSchema);
export default Assignment;

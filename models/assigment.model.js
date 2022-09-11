import mongoose from "mongoose";
const Schema = mongoose.Schema;

const assignmentSchema = new Schema(
  {
    nameAss: {
      type: String,
      required: true,
    },
    linkFile: {
      type: String,
      required: false,
    },
    idStudent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
    date: {
      type: String,
      require: true,
    },
    ok: {
      type: String,
      require: true,
    },
    isXacNhan: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      required: false,
    },
    point: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
// export collection name 'users' storing login infomation
const Assignment = mongoose.model("Assignment", assignmentSchema);
export default Assignment;

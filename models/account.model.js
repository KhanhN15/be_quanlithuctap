import mongoose from "mongoose";
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  idDepartment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
  idTeacher: {
    type: String,
    required: false,
  },
  lop: {
    type: String,
    required: false,
  },
  isAccept: {
    type: String,
    required: false,
  },
  isTeacherAccept: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  idEnterprise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Enterprise",
  },
  commentEnterprise: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: true,
  },
});
// export collection name 'users' storing login infomation
const Account = mongoose.model("Account", accountSchema);
export default Account;
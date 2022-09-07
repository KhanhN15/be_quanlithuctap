import mongoose from "mongoose";
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
  nameDepartment: {
    type: String,
    required: true,
  },
  descriptionDepartment: {
    type: String,
    required: true,
  },
  idManageDepart: {
    type: String,
    required: false,
  },
});
// export collection name 'users' storing login infomation
const Department = mongoose.model("Department", departmentSchema);
export default Department;

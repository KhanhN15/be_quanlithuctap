import mongoose from "mongoose";
const Schema = mongoose.Schema;

const enterpriseSchema = new Schema({
  nameEnterprise: {
    type: String,
    required: true,
  },
  imgEnterprise: {
    type: String,
    required: true,
  },
  descriptionEnterprise: {
    type: String,
    required: true,
  },
});
// export collection name 'users' storing login infomation
const Enterprise = mongoose.model("Enterprise", enterpriseSchema);
export default Enterprise;

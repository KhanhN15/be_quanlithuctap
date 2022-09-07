import express from "express";
import {
  createAccount,
  createAccountDepartment,
  createAccountStudent,
  createAccountEnterPrise,
  updateEnterprise,
  deleteEnterprise,
  searchEnterprise,
  showAllEnterprise,
  addRequestEnterprise,
  feedBackEnterprise,
  updateAccountStudent,
  deleteAccountStudent,
  showOnlyStudent,
  addDepartmentManage,
  listStudentHasManage,
  addAssignment,
  reviewAssignment,
  searchIdTeacher,
  searchIdDepart,
  login,
  showDetailEnterprise,
} from "../controllers/account.controller.js";
const router = express.Router();

router.post("/create-account", createAccount);
router.post("/create-account-department", createAccountDepartment);
router.post("/create-account-student", createAccountStudent);
router.put("/update-account-student/:id", updateAccountStudent);
router.put("/delete-account-student/:id", deleteAccountStudent);
router.post("/create-account-enterprise", createAccountEnterPrise);
router.put("/update-account-enterprise/:id", updateEnterprise);
router.delete("/delete-account-enterprise/:id", deleteEnterprise);
router.get("/search-enterprise/:q", searchEnterprise);
router.get("/show-all-enterprise", showAllEnterprise);
router.get("/show-detail-enterprise/:id", showDetailEnterprise);

// dang ky thuc tap
router.put("/add-enterprise/:id", addRequestEnterprise);
router.put("/feed-back-enterprise/:id", feedBackEnterprise);

// show list student duoc giang vien quan li
router.get("/show-only-student", showOnlyStudent);
router.post("/add-department-manage/:id", addDepartmentManage);
router.get("/list-student-has-manage/:id", listStudentHasManage);
// them cac bai tap tien do theo tuan
router.post("/add-assignment", addAssignment);
router.put("/review-assignment/:id", reviewAssignment);

//search by idTeacher, idDepartment
router.get("/search-by-teacher/:q", searchIdTeacher);
router.get("/search-by-depart/:q", searchIdDepart);
// export default login;

router.post("/login", login);

export default router;

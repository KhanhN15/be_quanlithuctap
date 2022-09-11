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
  findUser,
  showOnlyTeacher,
  showOnlyStudentNoChoose,
  showDepart,
  acceptTeacher,
  showAssignById,
  showAssignOneById,
  submitHomeWork,
  deleteAss,
  listAllDepart,
  showTeacherByDepartment,
  listStudentHasManageDepartment,
  listCombineTeacherDepartment,
  findEnterpriseById,
  showListStudentFromEnterprise,
  deleteAcc,
  showListStudent,
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
router.get("/find-enterprise-by-id/:id", findEnterpriseById);
router.get(
  "/show-list-student-from-enterprise/:id",
  showListStudentFromEnterprise
);
router.get("/show-all-enterprise", showAllEnterprise);
router.get("/show-detail-enterprise/:id", showDetailEnterprise);

// dang ky thuc tap
router.put("/add-enterprise/:id", addRequestEnterprise);
router.put("/feed-back-enterprise/:id", feedBackEnterprise);

// show list student duoc giang vien quan li
router.get("/show-only-student", showOnlyStudent);
router.get("/show-only-teacher", showOnlyTeacher);
router.put("/add-department-manage/:id", addDepartmentManage);
router.get("/list-student-has-manage/:id", listStudentHasManage);
router.get(
  "/list-student-has-manage-by-department/:id",
  listStudentHasManageDepartment
);
router.get("/list-student-combine", listCombineTeacherDepartment);
// them cac bai tap tien do theo tuan
router.post("/add-assignment", addAssignment);
router.put("/review-assignment/:id", reviewAssignment);
router.put("/submit-homework/:id", submitHomeWork);
router.get("/show-assign/:id", showAssignById);
router.get("/show-assign-one/:id", showAssignOneById);
router.put("/accept-teacher/:id", acceptTeacher);
router.delete("/delete-ass/:id", deleteAss);
router.delete("/delete-acc/:id", deleteAcc);

//search by idTeacher, idDepartment
router.get("/search-by-teacher/:q", searchIdTeacher);
router.get("/search-by-depart/:q", searchIdDepart);

router.get("/find-user/:id", findUser);
router.get("/show-only-student-no-choose", showOnlyStudentNoChoose);
router.get("/show-depart", listAllDepart);
router.get("/show-teacher-by-department/:id", showTeacherByDepartment);
// export default login;
router.get("/show-depart/:id", showDepart);
router.post("/login", login);
router.get("/show-list-student", showListStudent);

export default router;

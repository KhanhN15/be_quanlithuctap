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
  ShowDetailAssignByStudent,
  editAccount,
  getStudentHasEnterprise,
  averageMax,
  averageMin,
  allUsers,
  saveData,
  statistic,
  indexHere,
  showListByDepartment,
  pdfSubmit,
  pdfStatusSubmit,
  showPdf,
  createAccountEnterprise,
  search,
  addComments,
  createAccountStudentHi,
} from "../controllers/account.controller.js";
const router = express.Router();

router.post("/create-account", createAccount);
router.post("/create-account-department", createAccountDepartment);
router.post("/create-account-student", createAccountStudent);
router.post("/create-account-student-hi", createAccountStudentHi);
router.post("/create-account-dn", createAccountEnterprise);
router.put("/update-account-student/:id", updateAccountStudent);
router.delete("/delete-account-student/:id", deleteAccountStudent);
router.post("/create-account-enterprise", createAccountEnterPrise);
router.put("/update-account-enterprise/:id", updateEnterprise);
router.delete("/delete-account-enterprise/:id", deleteEnterprise);
router.get("/search-enterprise/:q", searchEnterprise);
router.get("/search-full/:q", search);
router.get("/find-enterprise-by-id/:id", findEnterpriseById);
router.get(
  "/show-list-student-from-enterprise/:id",
  showListStudentFromEnterprise
);
router.get("/show-all-enterprise", showAllEnterprise);
router.get("/show-detail-enterprise/:id", showDetailEnterprise);

// dang ky thuc tap
router.put("/add-enterprise/:id", addRequestEnterprise);
router.put("/add-comment/:id", addComments);
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
router.put("/pdf-file/:id", pdfSubmit);
router.put("/pdf-status/:id", pdfStatusSubmit);
router.get("/show-all-pdf-course/:id", showPdf);
router.delete("/delete-ass/:id", deleteAss);
router.delete("/delete-acc/:id", deleteAcc);

//search by idTeacher, idDepartment
router.get("/search-by-teacher/:q", searchIdTeacher);
router.get("/search-by-depart/:q", searchIdDepart);

router.get("/find-user/:id", findUser);
router.get("/show-only-student-no-choose", showOnlyStudentNoChoose);
router.get("/show-depart", listAllDepart);
router.get("/show-teacher-by-department/:id", showTeacherByDepartment);
router.get("/show-teacher-here/:id/:idTeacher", showListByDepartment);
// export default login;
router.get("/show-depart/:id", showDepart);
router.post("/login", login);
router.get("/show-list-student", showListStudent);
router.get("/show-detail-assign-by-student/:id", ShowDetailAssignByStudent);
router.put("/edit-account/:id", editAccount);
router.get("/get-student-has-enterprise", getStudentHasEnterprise);

router.get("/average-max", averageMax);
router.get("/average-min", averageMin);
router.get("/all-user", allUsers);
router.post("/save", saveData);
router.get("/statistic/:q", statistic);
router.get("/index", indexHere);

export default router;

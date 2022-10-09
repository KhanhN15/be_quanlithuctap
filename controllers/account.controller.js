import Account from "../models/account.model.js";
import Department from "../models/department.model.js";
import Enterprise from "../models/enterprise.model.js";
import Assignment from "../models/assigment.model.js";
import mongoose from "mongoose";
import User from "../models/users.model.js";
import e from "express";

export const createAccount = async (req, res) => {
  try {
    const { name, password, birthday, lop, address, role, img } = req.body;
    const user = await Account.findOne({ name });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exist" });
    }

    const newUser = new Account({
      name,
      password,
      birthday,
      lop,
      address,
      role,
      img,
    });
    await newUser.save();

    res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const createAccountDepartment = async (req, res) => {
  try {
    const { nameDepartment, descriptionDepartment, idManageDepart } = req.body;
    const account = await Department.findOne({ nameDepartment });

    if (account) {
      return res
        .status(400)
        .json({ success: false, message: "Department already exist" });
    }
    const newUser = new Department({
      nameDepartment,
      descriptionDepartment,
      idManageDepart,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Department created successfully",
    });
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const createAccountStudent = async (req, res) => {
  try {
    const {
      name,
      password,
      birthday,
      idDepartment,
      idTeacher,
      lop,
      address,
      role,
      img,
      isAccept,
      isTeacherAccept,
    } = req.body;
    const account = await Account.findOne({ name });

    if (account) {
      return res
        .status(400)
        .json({ success: false, message: "Account already exist" });
    }
    const newUser = new Account({
      ...req.body,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const createAccountEnterprise = async (req, res) => {
  try {
    const { name, password, idEnterprise, address, role, img } = req.body;
    const account = await Account.findOne({ name });

    if (account) {
      return res
        .status(400)
        .json({ success: false, message: "Account already exist" });
    }
    const newUser = new Account({
      ...req.body,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateAccountStudent = async (req, res) => {
  try {
    const {
      name,
      password,
      birthday,
      idDepartment,
      idTeacher,
      lop,
      address,
      role,
      img,
    } = req.body;

    const updatedPost = await Account.findOneAndUpdate(
      { _id: req.params.id },
      {
        name,
        password,
        birthday,
        idDepartment,
        idTeacher,
        lop,
        address,
        role,
        img,
      }
    );
    if (updatedPost) {
      res.status(200).json({ message: "Update successfully" });
    } else {
      res.status(404).json({ message: "Update fail" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ updatePost" });
  }
};

export const deleteAccountStudent = async (req, res) => {
  try {
    const account = await Account.findOneAndDelete({
      _id: req.params.id,
    });
    if (account) {
      res.status(200).json({ success: true, message: "Deleted successfully!" });
    } else {
      res.status(404).json({ success: false, message: "Deleted fail!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ deleteAccountStudent" });
  }
};

export const deleteAss = async (req, res) => {
  try {
    const account = await Assignment.findOneAndDelete({
      _id: req.params.id,
    });
    if (account) {
      res.status(200).json({ success: true, message: "Deleted successfully!" });
    } else {
      res.status(404).json({ success: false, message: "Deleted fail!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ deleteAccountStudent" });
  }
};

export const deleteAcc = async (req, res) => {
  try {
    const account = await Account.findOneAndUpdate(
      { _id: req.params.id },
      { idEnterprise: "", isAccept: "wait" }
    );
    if (account) {
      res.status(200).json({ success: true, message: "Deleted successfully!" });
    } else {
      res.status(404).json({ success: false, message: "Deleted fail!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ deleteAccountStudent" });
  }
};

export const createAccountEnterPrise = async (req, res) => {
  try {
    const { nameEnterprise, imgEnterprise, descriptionEnterprise } = req.body;
    const account = await Enterprise.findOne({ nameEnterprise });

    if (account) {
      return res
        .status(400)
        .json({ success: false, message: "Account already exist" });
    }
    const newUser = new Enterprise({
      nameEnterprise,
      imgEnterprise,
      descriptionEnterprise,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const updateEnterprise = async (req, res) => {
  try {
    const { nameEnterprise, imgEnterprise, descriptionEnterprise } = req.body;
    const updatedPost = await Enterprise.findOneAndUpdate(
      { _id: req.params.id },
      { nameEnterprise, imgEnterprise, descriptionEnterprise }
    );
    if (updatedPost) {
      res.status(200).json({ message: "Update successfully" });
    } else {
      res.status(404).json({ message: "Update fail" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ updatePost" });
  }
};

export const deleteEnterprise = async (req, res) => {
  // const userID = req.params.id;
  try {
    const deletedEnterprise = await Enterprise.findOneAndDelete({
      _id: req.params.id,
    });
    if (deletedEnterprise) {
      res.status(200).json({ success: true, message: "Deleted successfully!" });
    } else {
      res.status(404).json({ success: false, message: "Deleted fail!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ deleteEnterprise" });
  }
};

export const searchEnterprise = async (req, res) => {
  try {
    const p = req.params.q;
    const searchEnterprise = await Enterprise.find({
      nameEnterprise: { $regex: ".*" + q + ".*" },
    }).limit(10);
    res.status(200).json({ data: searchEnterprise });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ searchEnterprise" });
  }
};

export const search = async (req, res) => {
  try {
    const p = req.params.q;
    const searchEnterprise = await Account.find({
      $and: [{ role: "student" }],
      $or: [
        { name: { $regex: ".*" + p + ".*" } },
        { msv: { $regex: ".*" + p + ".*" } },
        { lop: { $regex: ".*" + p + ".*" } },
      ],
    });
    res.status(200).json({ data: searchEnterprise });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ searchEnterprise" });
  }
};

export const findEnterpriseById = async (req, res) => {
  try {
    const searchEnterprise = await Enterprise.findOne({
      _id: req.params.id,
    });
    res.status(200).json({ data: searchEnterprise });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ searchEnterprise" });
  }
};

export const showAllEnterprise = async (req, res) => {
  try {
    const ListData = await Enterprise.find({});

    res.status(200).json({ success: true, data: ListData });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ getAllStudent" });
  }
};

export const listAllDepart = async (req, res) => {
  try {
    const ListData = await Department.find({});

    res.status(200).json({ success: true, data: ListData });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ getAllStudent" });
  }
};

export const addRequestEnterprise = async (req, res) => {
  try {
    const { isAccept, idEnterprise } = req.body;

    const updatedPost = await Account.findOneAndUpdate(
      { _id: req.params.id },
      {
        isAccept: isAccept,
        idEnterprise: mongoose.Types.ObjectId(idEnterprise),
      }
    );
    if (updatedPost) {
      res.status(200).json({ message: "Update successfully" });
    } else {
      res.status(404).json({ message: "Update fail" });
    }
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    res
      .status(500)
      .json({ success: false, message: "Server error ~ addRequestEnterprise" });
  }
};

export const feedBackEnterprise = async (req, res) => {
  try {
    const { commentEnterprise } = req.body;
    const updatedPost = await Account.findOneAndUpdate(
      { _id: req.params.id },
      { commentEnterprise }
    );
    if (updatedPost) {
      res.status(200).json({ message: "Update successfully" });
    } else {
      res.status(404).json({ message: "Update fail" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ addRequestEnterprise" });
  }
};

export const addComments = async (req, res) => {
  try {
    const { comment } = req.body;

    const updatedPost = await Account.findOneAndUpdate(
      { _id: req.params.id },
      { comment }
    );
    if (updatedPost) {
      res.status(200).json({ message: "Update successfully" });
    } else {
      res.status(404).json({ message: "Update fail" });
    }
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    res
      .status(500)
      .json({ success: false, message: "Server error ~ addRequestEnterprise" });
  }
};

export const showOnlyStudent = async (req, res) => {
  try {
    const ListStudents = await Account.find({ role: "student" }).select(
      "-password"
    );

    res.status(200).json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ showOnlyStudent" });
  }
};

export const showOnlyStudentNoChoose = async (req, res) => {
  try {
    const ListStudents = await Account.find({
      role: "student",
    }).populate("idDepartment");

    res.status(200).json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ showOnlyStudent" });
  }
};

export const showOnlyTeacher = async (req, res) => {
  try {
    const ListStudents = await Account.find({ role: "teacher" }).select(
      "-password"
    );

    res.status(200).json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ showOnlyStudent" });
  }
};

export const addDepartmentManage = async (req, res) => {
  try {
    const { idDepartment, idTeacher } = req.body;
    const updatedPost = await Account.findOneAndUpdate(
      { _id: req.params.id },
      { idDepartment, idTeacher }
    );
    if (updatedPost) {
      res.status(200).json({ message: "Update successfully" });
    } else {
      res.status(404).json({ message: "Update fail" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ addDepartmentManage" });
  }
};

export const listStudentHasManage = async (req, res) => {
  try {
    const ListStudents = await Account.find({ idTeacher: req.params.id });

    res.json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ listStudentHasManage" });
  }
};

export const listStudentHasManageDepartment = async (req, res) => {
  try {
    const ListStudents = await Account.find({
      role: "student",
      idDepartment: req.params.id,
    })
      .populate("idEnterprise")
      .populate("idDepartment");

    res.json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ listStudentHasManage" });
  }
};

export const listCombineTeacherDepartment = async (req, res) => {
  try {
    const { idDepartment, idTeacher } = req.body;
    const ListStudents = await Account.find({
      idDepartment,
      idTeacher,
    });

    res.json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ listStudentHasManage" });
  }
};

export const addAssignment = async (req, res) => {
  try {
    const { nameAss, idStudent, date } = req.body;
    const account = await Assignment.findOne({ nameAss });

    if (account) {
      return res
        .status(400)
        .json({ success: false, message: "Account already exist" });
    }
    const newUser = new Assignment({
      nameAss,
      idStudent: mongoose.Types.ObjectId(idStudent),
      date,
      isOk: "wait",
      isXacNhan: "wait",
      point: "",
      comment: "",
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ addAssignment" });
  }
};

export const reviewAssignment = async (req, res) => {
  try {
    const { isXacNhan, comment, point } = req.body;
    const updatedPost = await Assignment.findOneAndUpdate(
      { _id: req.params.id },
      { isXacNhan, comment, point }
    );
    if (updatedPost) {
      res.status(200).json({ message: "Update successfully" });
    } else {
      res.status(404).json({ message: "Update fail" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ reviewAssignment" });
  }
};

export const submitHomeWork = async (req, res) => {
  try {
    const { ok, linkFile } = req.body;
    const updatedPost = await Assignment.findOneAndUpdate(
      { _id: req.params.id },
      { ok: ok, linkFile }
    );
    if (updatedPost) {
      res.status(200).json({ message: "Update successfully" });
    } else {
      res.status(404).json({ message: "Update fail" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ reviewAssignment" });
  }
};

export const pdfSubmit = async (req, res) => {
  try {
    const { filePdf } = req.body;
    const updatedPost = await Account.findOneAndUpdate(
      { _id: req.params.id },
      { file: filePdf, isReview: "wait" }
    );
    if (updatedPost) {
      res.status(200).json({ message: "Update successfully" });
    } else {
      res.status(404).json({ message: "Update fail" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ reviewAssignment" });
  }
};

export const showPdf = async (req, res) => {
  try {
    const ListStudents = await Account.findOne({
      _id: req.params.id,
    });

    res.json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ listStudentHasManage" });
  }
};

export const pdfStatusSubmit = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedPost = await Account.findOneAndUpdate(
      { _id: req.params.id },
      { isReview: "done" }
    );
    if (updatedPost) {
      res.status(200).json({ message: "Update successfully" });
    } else {
      res.status(404).json({ message: "Update fail" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ reviewAssignment" });
  }
};

export const searchIdTeacher = async (req, res) => {
  try {
    const ListStudents = await Account.find({
      idTeacher: req.params.q,
    }).populate("idDepartment");

    res.status(200).json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ searchIdTeacher" });
  }
};

export const searchIdDepart = async (req, res) => {
  try {
    const ListStudents = await Account.find({ idDepartment: req.params.q });

    res.status(200).json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ searchIdDepart" });
  }
};

export const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const find = await Account.findOne({
      msv: username,
      password: password,
    });

    if (!find) {
      return res.status(400).json({
        success: false,
        message: "Tên đăng nhập hoặc mật khẩu không đúng!",
      });
    }
    return res.status(200).json({
      success: true,
      data: find,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error ~ login" });
  }
};

export const showDetailEnterprise = async (req, res) => {
  try {
    const data = await Enterprise.findOne({ _id: req.params.id });
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error ~ login" });
  }
};

export const showDepart = async (req, res) => {
  try {
    const data = await Department.findOne({ _id: req.params.id });
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error ~ login" });
  }
};

export const findUser = async (req, res) => {
  try {
    const data = await Account.findOne({ _id: req.params.id })
      .populate("idEnterprise")
      .populate("idTeacher")
      .populate("idDepartment");
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error ~ login" });
  }
};

export const showAssignById = async (req, res) => {
  try {
    const data = await Assignment.find({ idStudent: req.params.id });

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error ~ login" });
  }
};

export const showAssignOneById = async (req, res) => {
  try {
    const data = await Assignment.findOne({ _id: req.params.id });

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error ~ login" });
  }
};

export const acceptTeacher = async (req, res) => {
  try {
    const { isTeacherAccept } = req.body;

    const updatedPost = await Account.findOneAndUpdate(
      { _id: req.params.id },
      {
        isTeacherAccept: isTeacherAccept,
      }
    );
    if (updatedPost) {
      res.status(200).json({ message: "Update successfully" });
    } else {
      res.status(404).json({ message: "Update fail" });
    }
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
    res
      .status(500)
      .json({ success: false, message: "Server error ~ addRequestEnterprise" });
  }
};

export const showTeacherByDepartment = async (req, res) => {
  try {
    const ListStudents = await Account.find({
      role: "teacher",
      // idTeacher: teacher,
      idDepartment: req.params.id,
    }).select("-password");

    res.status(200).json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ addRequestEnterprise" });
  }
};

export const showListByDepartment = async (req, res) => {
  try {
    const { teacher } = req.body;
    const ListStudents = await Account.find({
      role: "student",
      idTeacher: req.params.idTeacher,
      idDepartment: req.params.id,
    })
      .populate("idEnterprise")
      .populate("idDepartment");

    if (ListStudents) {
      return res.status(200).json({ success: true, data: ListStudents });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ addRequestEnterprise" });
  }
};

export const showListStudentFromEnterprise = async (req, res) => {
  try {
    const ListStudents = await Account.find({
      role: "student",
      idEnterprise: req.params.id,
    });

    res.json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ listStudentHasManage" });
  }
};

export const showListStudent = async (req, res) => {
  try {
    const ListStudents = await Account.find({});

    res.json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ listStudentHasManage" });
  }
};

export const ShowDetailAssignByStudent = async (req, res) => {
  try {
    const ListStudents = await Assignment.find({
      idStudent: req.params.id,
    });

    res.json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ listStudentHasManage" });
  }
};

export const editAccount = async (req, res) => {
  try {
    const { name, birthday, address, lop } = req.body;

    const updatedPost = await Account.findOneAndUpdate(
      { _id: req.params.id },
      {
        name,
        birthday,
        address,
        lop,
      }
    );
    if (updatedPost) {
      res.status(200).json({ message: "Update successfully" });
    } else {
      res.status(404).json({ message: "Update fail" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error ~ updatePost" });
  }
};

export const getStudentHasEnterprise = async (req, res) => {
  try {
    const ListStudents = await Account.find({
      isAccept: "done",
      isTeacherAccept: "done",
    })
      .populate("idEnterprise")
      .populate("idTeacher")
      .populate("idDepartment");

    res.json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ listStudentHasManage" });
  }
};

export const averageMax = async (req, res) => {
  try {
    const ListStudents = await User.find({ age: { $gt: 20 } });

    res.json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ listStudentHasManage" });
  }
};

export const averageMin = async (req, res) => {
  try {
    const ListStudents = await User.find({ age: { $lt: 20 } });

    res.json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ listStudentHasManage" });
  }
};

export const allUsers = async (req, res) => {
  try {
    const ListStudents = await User.find({});

    res.json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ listStudentHasManage" });
  }
};

export const saveData = async (req, res) => {
  try {
    const newUser = new User({
      name: "Khoi",
      age: "10",
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Server error ~ addAssignment" });
  }
};

export const statistic = async (req, res) => {
  try {
    const reqq = req.params.q;
    let ListStudents = [];
    if (reqq == "max") {
      ListStudents = await User.find({ age: { $gt: 20 } });
    } else if (reqq == "min") {
      ListStudents = await User.find({ age: { $lt: 20 } });
    } else {
      ListStudents = await User.find({});
    }
    res.json({ success: true, data: ListStudents });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server error ~ listStudentHasManage" });
  }
};

export const indexHere = async (req, res) => {
  try {
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

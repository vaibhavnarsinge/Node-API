const AppLogModule = require("../models/appModule");
const AppRegModule = require("../models/appRegister");
const AppEmpDetail = require("../models/appGetEmpDetails");
const EmpDeleteFunction = require("../models/appEmpDelete");
const registerfunction = require("../models/appRegister");

exports.login = async function (req, res, next) {
  let mail = req.query.username;
  let password = req.query.password;
  try {
    let userexist = await AppLogModule(mail, password, 2);
    if (userexist.userexists == "1") {
      // const savePost = await post.save();
      res.status(200).json({
        Success: true,
        Message: "Successful",
        Data: [],
      });
    } else if (userexist.userenotxists == "2") {
      return res.status(200).send({
        Success: false,
        Message: "USer not found",
        Data: [],
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.getempdetails = async function (req, res, next) {
  try {
    let result = await AppEmpDetail(3);
    let data = result.recordsets[1];
    if (data[0].userexists == "1") {
      res.status(200).json({
        Success: true,
        Message: "Employee Dat Found",
        Data: result.recordsets[0],
      });
    } else {
      return res.status(220).send({
        Success: false,
        Message: "Employee data not found",
        Data: [],
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.register = async function (req, res, next) {
  let data = req.body;
  try {
    let result = await registerfunction(data, 1);
    let sqlMessage = result.recordsets[0]

    if (sqlMessage[0].userexists == "success") {
      res.status(200).send({
        Success: true,
        Message: "Register successfully",
        Data: [result.recordsets[0]],
      });
    } 
    else if (sqlMessage[0].userexists == "2") {
      return res.status(220).send({
        Success: false,
        Message: " phone no Already Exists",
        Data: [],
      });
    } 
    else if (sqlMessage[0].userexists == "1") {
      return res.status(240).json({
        Success: false,
        Message: "Email Already Exists",
        Data: [],
      });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.EmpDelete = async function (req, res, next) {
    let mail = req.query.email;
    try {
      let result = await EmpDeleteFunction(mail, 4);
      let sqlMessage = result.recordsets[0]
  
      if (sqlMessage[0].deleted == "1") {
        res.status(200).send({
          Success: true,
          Message: "Deleted successfully",
          Data: [],
        });
      } 
      else if (sqlMessage[0].deleted == "2") {
        return res.status(220).send({
          Success: false,
          Message: " Data not deleted",
          Data: [],
        });
      } 
    } catch (err) {
      console.log(err);
    }
  };
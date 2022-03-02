const Doctor = require("../models/Doctor");
// const Admin = require("../models/Admin");
// const PPerson = require("../models/Person");
// const User = require("../models/User");

const postController = {
  create: async (req, res) => {
    return res.status(200).json(["Post has been created"]);
  },
  getAllDoctors: async (req, res) => { //Doctor
    let data = [{
      "_id": "234fswaa",
      "personal": {
        "fname": "Bob",
        "lname": "Marley",
        "email": "pawan@gmail.com",
        "phone": "1234567890",
      }, "detail": {
        "designation": "Senior Physician",
        "workingSince": new Date(2020, 1, 25),
        "verified": true,
        "acess": ["23434", "34ds33", "33dasw2"], //Appointments doctor has access to
        "suscribedTo": ["2342ssww22"], //Admins who can change the data on doctor
      }
    }];
    res.status(200).json(data);
  }
};

module.exports = postController;

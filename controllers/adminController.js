// const Post = require("../models/Post");
// const User = require("../models/User");

const postController = {
  getAll: async (req, res) => { //Doctor
    let data = [{
      "_id": "234fswaa",
      "personal": {
        "fname": "Bob",
        "lname": "Marley",
        "email": "abcdefg@gmail.com",
        "phone": "1234567890",
        "address": "Sampang Chowk",
        "city": "Dharan",
        "state": "2",
        "dob": "01/01/1990",
        "belongsTo": "234fswaa"
      },
      "detail": {
        "designation": "FrontDesk Manager",
        "workingSince": new Date(2020, 1, 25),
        "verified": true,
        "acess": ["23434", "34ds33", "33dasw2"], // doctors admin has access to
        "suscribedTo": ["2342ssww22"], //Admins who can change the data on this admin
      }
    }, {
      "_id": "5se822",
      "personal": {
        "fname": "Boba",
        "lname": "Bobo"
      },
      "detail": {
        "designation": "Surgery Head",
        "workingSince": new Date(2010, 5, 20),
        "verified": true,
        "acess": ["235564", "34ds33aa", "33da4455"], //Appointments doctor has access to
        "suscribedTo": ["sdresww22"], //Admins who can change the data on doctor
      }
    }];
    res.status(200).json(data);
  },
  getOne: async (req, res) => {
    let data = {
      "_id": req.params.id,
      "personal": {
        "fname": "Bob",
        "lname": "Marley"
      },
      "detail": {
        "designation": "Senior Physician",
        "workingSince": new Date(2020, 1, 25),
        "verified": true,
        "acess": ["23434", "34ds33", "33dasw2"], //Appointments doctor has access to
        "suscribedTo": ["2342ssww22"], //Admins who can change the data on doctor
      }
    };
    res.status(200).json(data);
  },
};

module.exports = postController;

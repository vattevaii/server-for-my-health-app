const Doctor = require("../models/Doctor");

const docController = {
   create: async (req, res) => {
      return res.status(200).json(["Post has been created"]);
   },
   getAll: async (req, res) => { //Doctor
      let data = [{
         "person": {
            "fname": "Bob",
            "lname": "Marley",
         },
         "doctor": {
            "_id": "234fswaa",
            "designation": "Senior Physician",
            "workingSince": new Date(2020, 1, 25),
            "verified": true,
            "acess": ["23434", "34ds33", "33dasw2"], //Appointments doctor has access to
            "suscribedTo": ["2342ssww22"], //Admins who can change the data on doctor
         }
      }];
      res.status(200).json(data);
   },
   getOne: async (req, res) => {
      let data = {
         "_id": "234fswaa",
         "person": {
            "fname": "Bob",
            "lname": "Marley",
         },
         "doctor": {
            "designation": "Senior Physician",
            "workingSince": new Date(2020, 1, 25),
            "verified": true,
            "acess": ["23434", "34ds33", "33dasw2"], //Appointments doctor has access to
            "suscribedTo": ["2342ssww22"], //Admins who can change the data on doctor
         }
      };
      res.status(200).json(data);
   }
};

module.exports = docController;

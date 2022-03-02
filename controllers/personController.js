// const Doctor = require("../models/Doctor");
// const Admin = require("../models/Admin");
const Person = require("../models/Person");
// const User = require("../models/User");

const personController = {
   create: async (req, res) => {
      const personExist = await Person.findOne({
         $or: [{ email: req.body.email }, { phone: req.body.phone }]
      });
      console.log("req.body", personExist);
      if (personExist)
         throw res
            .status(409)
            .send(`Person with given email or phone already exists!`);

      // CREATE NEW USER
      const newPerson = new Person({
         fname: req.body.fname,
         lname: req.body.lname,
         email: req.body.email,
         phone: req.body.phone,
         state: req.body.state,
         city: req.body.city,
         sex: req.body.sex,
         dob: req.body.dob,
         address: req.body.address,
         userId: req.user._id.toString()
      });
      // SAVE USER AND RESPOND
      try {
         const person = await newPerson.save();
         let newUser = null
         if (!user.patientId)
            newUser = await Post.findOneAndUpdate(
               { _id: req.user._id.toString() },
               {
                  $set: { patientId: person._id.toString() },
               },
               { returnOriginal: false }
            );
         return res.status(200).json({ newUser: newUser });
      } catch (error) {
         res.status(500).send("No new person made " + error);
      }
   },
};

module.exports = personController;

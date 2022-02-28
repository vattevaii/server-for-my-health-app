const mongoose = require(mongoose);

const PersonSchema = new mongoose.Schema(
   {
      fname: {
         type: String,
         required: true,
         min: 3,
         max: 20,
      },
      lname: {
         type: String,
         required: true,
         min: 3,
         max: 20,
      },
      email: {
         type: String,
         required: true,
         max: 50,
         unique: true,
         email: true,
      },
      phone: {
         type: String,
         required: true,
         max: 20,
      },
      address: {
         type: String,
         required: true,
         max: 100,
      },
      city: {
         type: String,
         required: true,
         max: 20,
      },
      state: {
         type: Number,
         required: true,
         max: 10,
      },
      dob: {
         type: Date,
         required: true,
      },
      userId: {
         type: String,
         required: true,
      }
   }, {
   timestamps: true
});


module.exports = mongoose.model("Person", PersonSchema);
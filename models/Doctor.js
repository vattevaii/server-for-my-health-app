const mongoose = require(mongoose);

const DoctorSchema = new mongoose.Schema(
   {
      designation: {
         type: String,
         required: true,
         min: 5,
      },
      workingSince: {
         type: Date,
         required: true,
      },
      verified: {
         type: Boolean,
         default: false,
      },
      acess: {
         type: [
            String
         ],
         default: null,
      },
      suscribedTo: {
         type: [
            String
         ],
         required: true,
      },
      userId: {
         type: String,
         required: true,
      }
   }
);

module.exports = mongoose.model("Doctor", DoctorSchema);

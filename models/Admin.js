const mongoose = require(mongoose);

const AdminSchema = new mongoose.Schema(
   {
      designation: {
         type: String,
         required: true,
         min: 5,
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

module.exports = mongoose.model("Admin", AdminSchema);

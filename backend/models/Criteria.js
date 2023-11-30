import mongoose from "mongoose";

const criteriaSchema = new mongoose.Schema({
  type: { type: String, required: true },
  text: { type: String, required: true },
  variable: {
    type: mongoose.Schema.Types.Mixed
  },
});

const Criteria = mongoose.model("Criteria", criteriaSchema);

export default Criteria;
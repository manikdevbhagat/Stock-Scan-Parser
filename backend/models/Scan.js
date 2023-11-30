import mongoose from "mongoose";

const scanDataSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  tag: { type: String, required: true },
  color: { type: String, required: true },
  criteria: [{ type: mongoose.Schema.Types.ObjectId, ref: "Criteria" }],
});

const Scan = mongoose.model("Scan", scanDataSchema);
export default Scan;
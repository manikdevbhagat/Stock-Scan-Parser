import Scan from "../models/Scan.js";

export const getData = async (req, res) => {
  try {
    const data = await Scan.find({}, { _id: 0, __v:0 })
      .sort({ id: 1 })
      .populate({
        path: 'criteria',
        select: '-_id -__v',
      });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
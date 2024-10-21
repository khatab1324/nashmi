import mongoose, { Schema } from "mongoose";

const Sha7dahSchema = new Schema({
    sha7daID: {type: Number, required: true}, 
    title: {type: String, unique: true},
    desc: String,
    imageURL: String,
    collectedAmount: {type: Number, default: 0},
    totalAmount: {type: Number, required: true},
    category: {type: String, required: true},
    sha7daStatus: {type: String, enum: ['ongoing', 'complete'], default: 'ongoing'}
});

export default mongoose.model("Sha7dah", Sha7dahSchema);

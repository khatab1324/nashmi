import mongoose, { Schema } from "mongoose";

const Sha7dahSchema = new Schema({
    sha7daID: {Number, required: ture}, 
    title: {String, unique: true},
    desc: String,
    imageURL: String,
    collectedAmount: {Number, default: 0},
    totalAmount: {Number, required: true},
    category: {String, required: true},
    sha7daStatus: {type: String, enum: ['ongoing', 'complete'], default: 'ongoing'}
});

export default mongoose.model("Sha7dah", Sha7dahSchema);

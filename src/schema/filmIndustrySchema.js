import mongoose from "mongoose";
import connectDB from "../db";

connectDB();

const filmIndustrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: null
    },
    age: {
        type: Number,
        required: true
    },
    maritalStatus: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    hometown: {
        type: String,
        required: true
    },
    is_deleted: {
        type: Boolean,
        default: false
    },
    details_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Details',
        default: null
    },
}, {
    timestamps: true  // Add timestamps option to the schema
});

export default mongoose.models.Film_Industry || mongoose.model('Film_Industry', filmIndustrySchema);

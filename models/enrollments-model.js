import mongoose, { Schema } from "mongoose";

export const enrollmentsSchema = new Schema({
    enrollment_date: {
        type: Date,
        required: [true, "Enrollment date is required"],
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "complete"],
    },
    completion_date: {
        type: Date,
        required: [true, "Completation date is required"],
    },
    method: {
        type: String,
        required: [true, "Payment method is required"],
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course",
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

export const Enrollment =
    mongoose.models.Enrollment ??
    mongoose.model("Enrollment", enrollmentsSchema);

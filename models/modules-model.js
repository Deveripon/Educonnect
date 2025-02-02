import mongoose, { Schema } from "mongoose";

const moduleSchema = new Schema(
    {
        title: {
            required: [true, "Title is required"],
            type: String,
        },
        description: {
            required: [true, "Description is required"],
            type: String,
        },
        status: {
            required: [true, "Status is required"],
            type: String,
            default: "draft",
        },
        slug: {
            required: [true, "Slug is required"],
            type: String,
        },
        course: {
            required: [true, "Course is required"],
            type: String,
        },
        lessonIds: {
            required: [true, "lessonId is required"],
            type: [String],
        },
    },
    {
        timestamps: true,
    }
);

export const Module =
    mongoose.models.Module ?? mongoose.model("Module", moduleSchema);

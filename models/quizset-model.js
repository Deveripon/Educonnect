import mongoose, { Schema } from "mongoose";
const quizSetSchema = Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        mark: {
            type: Number,
            required: [true, "Mark is required"],
        },
        slug: {
            type: String,
            required: [true, "Slug is required"],
        },
        quizIds: [
            {
                type: Schema.Types.ObjectId,
                ref: "Quizzes",
            },
        ],
        status: {
            type: String,
            required: [true, "Status is required"],
            enum: ["draft", "active"],
            default: "draft",
        },
    },
    {
        timestamps: true,
    }
);

export const Quizset =
    mongoose.models.Quizset ?? mongoose.model("Quizset", quizSetSchema);

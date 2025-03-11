import { Schema } from "mongoose";
const quizSchema = Schema(
    {
        question: {
            type: String,
            required: [true, "Question is required"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        options: {
            type: [Object],
            required: [true, "Options are required"],
        },
        explanation: {
            type: String,
            required: [true, "Explanation is required"],
        },
        mark: {
            type: Number,
            required: [true, "Mark is required"],
        },
        slug: {
            type: String,
            required: [true, "Slug is required"],
        },
    },
    {
        timestamps: true,
    }
);

export const Quizzes =
    mongoose.models.Quizzes ?? mongoose.model("Quizzes", quizSchema);

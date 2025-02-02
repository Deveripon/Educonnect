import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
    {
        title: {
            required: [true, "Title is required"],
            type: String,
        },

        description: {
            required: [true, "Description is required"],
            type: String,
        },

        thumbnail: {
            required: [true, "Thumbnail is required"],
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const Category =
    mongoose.models.Category ?? mongoose.model("Category", categorySchema);

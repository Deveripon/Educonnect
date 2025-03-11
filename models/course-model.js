import mongoose, { Schema } from "mongoose";

const courseShema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
        },
        subtitle: {
            type: String,
            required: [true, "Subtitle is required"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        thumbnail: {
            type: String,
            required: [true, "Thumbnail is required"],
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
        },
        active: {
            type: Boolean,
            default: false,
        },
        modules: [{ type: Schema.Types.ObjectId, ref: "Module" }],
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
        },
        instructor: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        quizSet: {
            type: Schema.Types.ObjectId,
            ref: "Quizset",
        },

        testimonials: [{ type: Schema.Types.ObjectId, ref: "Testimonial" }],

        learning: {
            required: [true, "Learing is required"],
            type: [String],
        },

        createdOn: {
            required: [true, "Created on is required"],
            type: Date,
        },

        modifiedOn: {
            required: [true, "Modified on is required"],
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

export const Course =
    mongoose.models.Course ?? mongoose.model("Course", courseShema);

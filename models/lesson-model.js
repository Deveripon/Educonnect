import mongoose, { Schema } from "mongoose";

const lessonSchema = new Schema({
    title: {
        required: [true, "Title is required"],
        type: String,
    },
    description: {
        required: false,
        type: String,
    },
    duration: {
        required: [true, "Duration is required"],
        type: Number,
    },
    video_url: {
        required: [true, "Video URL is required"],
        type: String,
    },
    published: {
        required: [true, "Publish status is required"],
        type: Boolean,
    },
    slug: {
        required: [true, "Slug is required"],
        type: String,
    },
    access: {
        required: [true, "Access is required"],
        type: String,
    },
});

export const Lesson =
    mongoose.models.Lesson ?? mongoose.model("Lesson", lessonSchema);

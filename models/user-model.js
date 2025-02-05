import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        firstName: {
            required: [true, "First name is required"],
            type: String,
        },
        lastName: {
            required: [true, "Last name is required"],
            type: String,
        },
        password: {
            required: [true, "Password is required"],
            type: String,
        },
        email: {
            required: [true, "Email is required"],
            type: String,
        },
        phone: {
            required: false,
            type: String,
        },
        role: {
            required: [true, "Role is required"],
            type: String,
        },
        bio: {
            required: false,
            type: String,
        },
        socialMedia: {
            required: false,
            type: Object,
        },
        profilePicture: {
            required: false,
            type: String,
        },
        designation: {
            required: false,
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);

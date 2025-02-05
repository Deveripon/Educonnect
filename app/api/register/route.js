import { User } from "@/models/user-model";
import { connectMongoDB } from "@/service/mongoConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// REGISTER USER
export async function POST(req) {
    try {
        await connectMongoDB();
        const { firstName, lastName, email, password, userRole } =
            await req.json();

        // check that user does not already exist
        const found = await User.findOne({ email: email });
        if (found) {
            return NextResponse.json(
                {
                    error: "User already exists",
                },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: userRole,
        };

        await User.create(newUser);

        return NextResponse.json(
            {
                success: true,
                data: newUser,
            },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            {
                error: error.message,
            },
            { status: 500 }
        );
    }
}

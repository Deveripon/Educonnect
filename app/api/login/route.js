import { User } from "@/models/user-model";
import { connectMongoDB } from "@/service/mongoConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongoDB();

        const { email, password } = await req.json();

        // 🛑 Input Validation
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "Invalid Credentials" },
                { status: 400 }
            );
        }

        // ✅ Use async compare instead of sync
        const isMatchedPassword = await bcrypt.compare(password, user.password);

        if (!isMatchedPassword) {
            return NextResponse.json(
                { error: "Invalid Credentials" },
                { status: 400 }
            );
        }

        // 🚀 Remove password before sending response
        const { password: _, ...userData } = user.toObject();

        return NextResponse.json(
            { success: true, data: userData },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { error: "Server Error", message: err.message },
            { status: 500 }
        );
    }
}

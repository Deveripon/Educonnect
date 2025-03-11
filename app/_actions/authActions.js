"use server";

import { signIn } from "@/auth";

export async function loginWithCredentials(formData) {
    console.log(`received credentials`, formData);
    try {
        const response = await fetch(`${process.env.SITE_URL}/api/login`, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(`data from action`, data);

        if (data?.error) {
            throw new Error(data?.error);
        }

        await signIn("credentials", {
            email: data?.data?.email,
            password: data?.data?.password,
            role: data?.data?.role,
            redirect: false,
        });
        return {
            success: true,
            message: "Login success",
        };
    } catch (err) {
        return {
            error: true,
            message: err.message,
        };
    }
}

export async function signInWithGoogle() {
    await signIn("google", { redirectTo: "/courses" });
}

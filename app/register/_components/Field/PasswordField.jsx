"use client";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function PasswordField({ register, ...props }) {
    const [show, setShow] = useState(false);
    return (
        <div className='group relative'>
            <Input {...register} type={show ? "text" : "password"} {...props} />

            {show ? (
                <Eye
                    onClick={() => setShow(!show)}
                    className='size-4 cursor-pointer absolute right-3 top-3'
                />
            ) : (
                <EyeOff
                    onClick={() => setShow(!show)}
                    className='size-4 cursor-pointer absolute right-3 top-3'
                />
            )}
        </div>
    );
}

export default PasswordField;

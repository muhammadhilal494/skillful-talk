import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { log } from "console";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
):Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'skillful-talk | Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
          });
        return {success: true, message: "verification email send successfully"}
    } catch (emailError) {
        console.error("error sending verification email",emailError)
        return {success: false, message: "Failed to send verification email"}
    }
}
import nodemailer from "nodemailer";
import type { User } from "~/models/login.server";

export async function sendMessage(user: User) {
  let to = "support@sportstocks.in";
  let from = "support@mailtrap.in";
  let subject = `OTP for new user ${user.mobileNumber} is ${user.otp}`;
  let message = JSON.stringify(user);

  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "7c99bc80ddc197",
      pass: "2787c9b007d867",
    },
  });

  // send email
  await transporter.sendMail({
    from,
    to,
    subject,
    text: message,
  });
}

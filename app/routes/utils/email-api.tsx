import { Feedback } from "@prisma/client";
import nodemailer from "nodemailer";

import type { User } from "~/models/user.server";

export async function sendMessage(feedback: Feedback) {
  let to = "support@sportstocks.in";
  let from = "support@mailtrap.in";
  let subject = `Feedback from ${feedback.email}`;
  let message = JSON.stringify(feedback);

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

export async function sentSMS(user: User) {
  const { mobileNumber, otp } = user;
  const smsURL = `https://www.fast2sms.com/dev/bulkV2?authorization=ukrm9HVdIEaelq27st3RJKMDx05yUpw1jTPLnY6zBA8hiCOGW462QdJEHDlB3xFRNwe8v45P109SyiVX&variables_values=${otp}&route=otp&numbers=${mobileNumber}`;

  await fetch(smsURL);
}

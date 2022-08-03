import axios from "axios";

import type { User } from "@prisma/client";
import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

async function sentSMS(mobile: number, otp: number) {
  const url =
    "https://api.textlocal.in/send/?apikey=NjU2ODU4NjIzNTRlNDE0YTc4NmU1NTY3NzI2MTM1NGM=";

  const number = `&numbers=${mobile}`;
  const sender = "&sender=TXTLCL";
  const message = `&message=${encodeURIComponent(
    `OTP to login to SportStocks is ${otp}`
  )}`;

  try {
    const response = await axios.get(url + number + sender + message);
    return response.data;
  } catch (error) {
    return {
      status: "failure",
      message: "Please try again.",
    };
  }
}

export async function createUser(mobile: number) {
  const otp = generateOTP();

  let response = await prisma.user.create({
    data: { mobileNumber: mobile + "", otp },
  });

  let smsResponse = {};
  if (response.id) {
    smsResponse = await sentSMS(mobile, otp);
    console.log({smsResponse})
  }

  return { response, smsResponse };
}

function generateOTP() {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return +OTP;
}

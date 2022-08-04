import axios from "axios";

import type { User } from "@prisma/client";
import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

// async function sentSMS(mobile: number, otp: number) {
//   const url =
//     "https://api.textlocal.in/send/?apikey=NjU2ODU4NjIzNTRlNDE0YTc4NmU1NTY3NzI2MTM1NGM=";

//   const number = `&numbers=${mobile}`;
//   const sender = "&sender=TXTLCL";
//   const message = `&message=${encodeURIComponent(
//     `OTP to login to SportStocks is ${otp}`
//   )}`;

//   try {
//     const response = await axios.get(url + number + sender + message);
//     return response.data;
//   } catch (error) {
//     return {
//       status: "failure",
//       message: "Please try again.",
//     };
//   }
// }

export async function createUser(mobile: number) {
  const otp = generateOTP();

  const user = await prisma.user.create({
    data: { mobileNumber: mobile + "", otp },
  });

  if (!user) {
    return null;
  }
  // let smsResponse = {};
  // if (response.id) {
  //   // smsResponse = await sentSMS(mobile, otp);
  // }

  const { otp: a1, ...userWithoutOTP } = user;

  console.log({ otp });
  return userWithoutOTP;
}

export async function getUserById(userId: string) {
  return prisma.user.findUnique({ where: { id: userId } });
}

function generateOTP() {
  const digits = "123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 9)];
  }
  return +OTP;
}

export async function verifyOTP(userId: string, otp: number) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  // @ts-ignore
  if (user && user?.id) {
    // @ts-ignore
    return user.otp === otp;
  }
  return user;
}

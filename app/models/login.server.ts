import { prisma } from "~/db.server";
import { sendMessage } from "~/routes/utils/email-api";

export type { User } from "@prisma/client";

export async function createUser(mobile: number) {
  const otp = generateOTP();

  const user = await prisma.user.create({
    data: { mobileNumber: mobile + "", otp },
  });

  if (!user) {
    return null;
  }
  const { otp: a1, ...userWithoutOTP } = user;

  sendMessage(user);

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

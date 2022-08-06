import { prisma } from "~/db.server";
import { sentSMS } from "~/routes/utils/email-api";

export async function createUser(mobile: string, otp: number) {
  const user = await prisma.user.create({
    data: { mobileNumber: mobile, otp },
  });

  if (!user) {
    return null;
  }
  const { otp: a1, ...userWithoutOTP } = user;

  await sentSMS(user);

  return userWithoutOTP;
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

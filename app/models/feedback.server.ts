import { prisma } from "~/db.server";
import { sendMessage } from "~/routes/utils/email-api";

export type { Feedback } from "@prisma/client";

export async function createFeedback({
  email,
  feedback,
  userId,
}: {
  email: string;
  feedback: string;
  userId: string;
}) {
  const cfeedback = await prisma.feedback.create({
    data: { email, feedback, userId },
  });
  if (!cfeedback) {
    return null;
  }
  sendMessage(cfeedback);
  return cfeedback;
}

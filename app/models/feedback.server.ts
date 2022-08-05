import type { Feedback } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Feedback } from "@prisma/client";


export function createFeedback({email, feedback, userId}: {email: String, feedback: String, userId: String}) {
    return prisma.feedback.create({data: {email, feedback, userId}});
}

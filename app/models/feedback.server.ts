import type { Feedback } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Feedback } from "@prisma/client";


export function createFeedback({email, feedback, userId}: {email: string, feedback: string, userId: string}) {
    return prisma.feedback.create({data: {email, feedback, userId}});
}

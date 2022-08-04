/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - Added the required column `mobileNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otp` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mobileNumber" TEXT NOT NULL,
    "otp" INTEGER NOT NULL,
    "token" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_mobileNumber_key" ON "User"("mobileNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

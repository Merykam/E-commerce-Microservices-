/*
  Warnings:

  - You are about to drop the column `methodId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `stripeSessionId` on the `Payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "methodId",
DROP COLUMN "stripeSessionId",
ADD COLUMN     "methodPayment" "PaymentMethod" NOT NULL DEFAULT 'Stripe';

/*
  Warnings:

  - A unique constraint covering the columns `[batch]` on the table `cardrequests` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cardrequests_batch_key" ON "cardrequests"("batch");

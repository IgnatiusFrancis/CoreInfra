-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('DISPATCH', 'READY', 'IN_PROGRESS', 'ACKNOWLEDGED', 'PENDING');

-- CreateEnum
CREATE TYPE "CardScheme" AS ENUM ('VERVE', 'MASTERCARD', 'VISA');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('NGN', 'USD');

-- CreateEnum
CREATE TYPE "FeeFrequency" AS ENUM ('ONE_OFF', 'MONTHLY');

-- CreateEnum
CREATE TYPE "FeeImpact" AS ENUM ('ISSUANCE', 'PIN_REISSUE');

-- CreateEnum
CREATE TYPE "AccountPad" AS ENUM ('NONE', 'BRANCH_CODE_PREFIX', 'BRANCH_CODE_SUFFIX');

-- CreateTable
CREATE TABLE "cardrequests" (
    "id" TEXT NOT NULL,
    "branchName" VARCHAR(255) NOT NULL,
    "cardType" VARCHAR(255) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "dateRequested" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "initiator" VARCHAR(255) NOT NULL,
    "cardCharges" DOUBLE PRECISION NOT NULL,
    "batch" VARCHAR(255) NOT NULL,
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "cardrequests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardProfile" (
    "id" TEXT NOT NULL,
    "cardName" VARCHAR(255) NOT NULL,
    "cardScheme" "CardScheme" NOT NULL,
    "description" TEXT,
    "branchBlacklist" TEXT,
    "binPrefix" TEXT NOT NULL,
    "expiration" INTEGER NOT NULL,
    "currency" "Currency" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CardProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fee" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "currency" "Currency" NOT NULL,
    "frequency" "FeeFrequency" NOT NULL,
    "feeImpact" "FeeImpact",
    "accountPad" "AccountPad" NOT NULL,
    "account" TEXT,
    "cardProfileId" TEXT NOT NULL,

    CONSTRAINT "Fee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "cardrequests_status_idx" ON "cardrequests"("status");

-- CreateIndex
CREATE INDEX "cardrequests_branchName_idx" ON "cardrequests"("branchName");

-- CreateIndex
CREATE INDEX "cardrequests_batch_idx" ON "cardrequests"("batch");

-- CreateIndex
CREATE UNIQUE INDEX "CardProfile_binPrefix_key" ON "CardProfile"("binPrefix");

-- CreateIndex
CREATE INDEX "Fee_cardProfileId_idx" ON "Fee"("cardProfileId");

-- AddForeignKey
ALTER TABLE "Fee" ADD CONSTRAINT "Fee_cardProfileId_fkey" FOREIGN KEY ("cardProfileId") REFERENCES "CardProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "contact" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "img" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "admin" (
    "email" TEXT NOT NULL,
    "district" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "admin_district_fkey" FOREIGN KEY ("district") REFERENCES "district" ("districtId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "parkat" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "zoneId" INTEGER NOT NULL,
    CONSTRAINT "parkat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "offence" (
    "offId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "offType" TEXT NOT NULL,
    "fineAmt" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "zone" (
    "zoneId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "zoneName" TEXT NOT NULL,
    "zoneImg" TEXT NOT NULL,
    "disId" INTEGER NOT NULL,
    CONSTRAINT "zone_disId_fkey" FOREIGN KEY ("disId") REFERENCES "district" ("districtId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "zonefee" (
    "feeId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "zoId" INTEGER NOT NULL,
    CONSTRAINT "zonefee_feeId_fkey" FOREIGN KEY ("feeId") REFERENCES "fee" ("feeId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "zonefee_zoId_fkey" FOREIGN KEY ("zoId") REFERENCES "zone" ("zoneId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "fee" (
    "feeId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeId" INTEGER NOT NULL,
    "feeAmt" INTEGER NOT NULL,
    CONSTRAINT "fee_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "vehicleType" ("tyId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "district" (
    "districtId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "dzongkhag" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "report" (
    "reportId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "reportTime" DATETIME NOT NULL,
    "fineStatus" BOOLEAN NOT NULL,
    "zoneName" INTEGER NOT NULL,
    "offenceId" INTEGER NOT NULL,
    "parkAttendId" INTEGER NOT NULL,
    "vehicleNo" INTEGER NOT NULL,
    CONSTRAINT "report_offenceId_fkey" FOREIGN KEY ("offenceId") REFERENCES "offence" ("offId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "report_parkAttendId_fkey" FOREIGN KEY ("parkAttendId") REFERENCES "parkat" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "report_vehicleNo_fkey" FOREIGN KEY ("vehicleNo") REFERENCES "vehicle" ("vehicleNo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "reportImg" (
    "reportId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageLink" INTEGER NOT NULL,
    CONSTRAINT "reportImg_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "report" ("reportId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "payment" (
    "paymentId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "journalNo" INTEGER NOT NULL,
    "accountNo" INTEGER NOT NULL,
    "bank" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "vehicleNo" INTEGER NOT NULL,
    "zoneId" INTEGER NOT NULL,
    "registerId" INTEGER NOT NULL,
    CONSTRAINT "payment_vehicleNo_fkey" FOREIGN KEY ("vehicleNo") REFERENCES "vehicle" ("vehicleNo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "payment_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "zone" ("zoneId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "payment_registerId_fkey" FOREIGN KEY ("registerId") REFERENCES "register" ("registerId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "vehicle" (
    "vehicleNo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeId" INTEGER NOT NULL,
    CONSTRAINT "vehicle_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "vehicleType" ("tyId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "vehicleType" (
    "tyId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicleT" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "register" (
    "registerId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "payment_journalNo_key" ON "payment"("journalNo");

-- CreateIndex
CREATE UNIQUE INDEX "payment_accountNo_key" ON "payment"("accountNo");

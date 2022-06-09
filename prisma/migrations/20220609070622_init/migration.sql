-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "landLordId" INTEGER,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandLord" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "LandLord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LandLord_email_key" ON "LandLord"("email");

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_landLordId_fkey" FOREIGN KEY ("landLordId") REFERENCES "LandLord"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "contacts" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "firstname" VARCHAR(100) NOT NULL,
    "lastname" VARCHAR(100),
    "email" VARCHAR(100),
    "phone" VARCHAR(20),

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

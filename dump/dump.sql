CREATE TABLE "public.clients" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"date" DATE NOT NULL,
	"payment" TEXT NOT NULL,
	"paid" BOOLEAN NOT NULL DEFAULT 'false',
	CONSTRAINT "clients_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





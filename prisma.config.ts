import "dotenv/config";

// Deklarasi lokal agar TypeScript tidak komplain
declare const process: { env: { [key: string]: string | undefined } };

export default {
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL || "",
  },
};
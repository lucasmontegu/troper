/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { env } from "@/../env.mjs";
import { Pool, PrismaClient, PrismaNeon } from "@troper/db";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const pool = new Pool({ connectionString: env.DATABASE_URL });
const adapter = new PrismaNeon(pool);

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter: adapter,
    log:
      env.ENVIROMENT === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.ENVIROMENT !== "production") globalForPrisma.prisma = prisma;
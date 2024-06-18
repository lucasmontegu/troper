/* eslint-disable @typescript-eslint/consistent-type-definitions */
import "dotenv/config";
import { z } from "zod";
import { flyRegions } from "@troper/utils";

console.log("🔐 Loading environment variables...");

export const zEnv = z.object({
  FLY_REGION: z.enum(flyRegions),
  CLERK_SECRET_KEY: z.string().min(1),
  CLERK_PUBLISHABLE_KEY: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  ENVIROMENT: z.enum(["development", "production"]),
  SENTRY_DSN: z.string().optional(),
});

export type Env = z.infer<typeof zEnv>;
import { Hono } from "hono";
import { showRoutes } from "hono/dev";
import { logger } from "hono/logger";
import { csrf } from "hono/csrf";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import { Env, zEnv } from "./env";
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'
import { PrismaClient } from "@troper/db";
import { cors } from "hono/cors";
import swaggerApp from "./middlewares/swagger.middleware";
import scans from "./routes/scans"

const app = new Hono<{
  Bindings: Env;
}>();

/**
 * Ping Pong
 */
/* app.use("/ping", logger());
app.get("/ping", (c) => c.json({ ping: "pong", region: zEnv }, 200)); */

/**
 * Middleware
 */
app.use('*', clerkMiddleware())
app.use('*', logger())
app.use('*', cors())
app.use('*', csrf())
app.use('*', prettyJSON())
app.use('*', secureHeaders())


/**
 * Prisma Middleware
 */
/* app.use("/api/*", async (c, next) => {
  const auth = getAuth(c)

  if (!auth?.userId) {
    return c.json({
      message: 'You are not logged in.',
    })
  }

  return c.json({
    message: 'You are logged in!',
    userId: auth.userId,
  })

  // Skip API key check for user registration endpoint
  if (c.req.path === "/api/users" && c.req.method === "POST") {
    return next();
  }

  const apiKey = c.req.header("x-api-key");
  if (!apiKey) {
    return c.json({ ok: false, message: "API key is required" }, 401);
  }

  const user = await prisma(c.env).user.findUnique({
    where: { apiKey },
  });

  if (!user) {
    return c.json({ ok: false, message: "Invalid API key" }, 401);
  }

  return next();
}); */

/**
 * API Routes
 */
app.route("/ui", swaggerApp)
app.route("/api/scans", scans)

const isDev = process.env.NODE_ENV === "development";
const port = isDev ? 3001 : 3000;

if (isDev) showRoutes(app, { verbose: true, colorize: true });

console.log(`Starting server on port ${port}`);

const server = { port, fetch: app.fetch };

export default server;

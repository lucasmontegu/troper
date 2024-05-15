import { Hono } from "hono";
import { showRoutes } from "hono/dev";
import { logger } from "hono/logger";
import { env } from "./env";
import { api } from "./v1";

const app = new Hono({ strict: false });

/**
 * Ping Pong
 */
app.use("/ping", logger());
app.get("/ping", (c) => c.json({ ping: "pong", region: env.FLY_REGION }, 200));

/**
 * API Routes v1
 */
app.route("/v1", api);

const isDev = process.env.NODE_ENV === "development";
const port = isDev ? 3001 : 3000;

if (isDev) showRoutes(app, { verbose: true, colorize: true });

console.log(`Starting server on port ${port}`);

const server = { port, fetch: app.fetch };

export default server;

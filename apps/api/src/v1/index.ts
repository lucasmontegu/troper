import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
//import { middleware } from "./middleware";

export const api = new OpenAPIHono<{ Variables: any }>();

api.use("/openapi", cors());

api.doc("/openapi", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "OpenStatus API",
  },
});

/**
 * Authentification Middleware
 */
//api.use("/*", middleware);
api.use("/*", logger());
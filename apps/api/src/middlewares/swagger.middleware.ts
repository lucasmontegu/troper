import { swaggerUI } from "@hono/swagger-ui";
import { Hono } from "hono";
import { OpenAPIHono } from "@hono/zod-openapi";

const app = new OpenAPIHono();

// The openapi.json will be available at /doc
app.doc("/api/doc", {
  openapi: "3.0.0",
  info: {
      version: "1.0.0",
      title: "My API",
  },
});

const swaggerApp = new Hono().get("/", swaggerUI({ url: "/api/doc" }));

export default swaggerApp;
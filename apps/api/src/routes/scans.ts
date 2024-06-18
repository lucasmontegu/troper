import { Hono } from "hono";
import { Env } from "../env";

const scan = new Hono<{
  Bindings: Env;
}>();

scan.get("/", async (c) => {
  return c.json({ message: "Hello World" }, 200);
})

scan.post("/", async (c) => {
  return c.json({ message: "Hello World" }, 200);
})



export default scan;
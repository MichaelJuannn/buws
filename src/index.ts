import { Elysia } from "elysia";
import { calculator } from "./controller/test";
import { getDog } from "./controller/dog";
const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get('/import', calculator)
  .get('/dog', getDog)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port} with}`
);

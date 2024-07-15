import {
  app,
  get,
  post,
  redirect,
  contentType,
} from "https://denopkg.com/syumai/dinatra/mod.ts";

const bytes = await Deno.readFile("./filepath.md");

const greeting = `<h1>Hello <span>${JSON.stringify(bytes)}</span>From Deno on Fly.ioooooopps!</h1>`;

app(
  get("/", () => greeting),
  get("/:id", ({ params }) => greeting + `</br>and hello to ${params.id}`),
);

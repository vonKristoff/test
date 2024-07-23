import {
  app,
  get,
  post,
  redirect,
  contentType,
} from "https://denopkg.com/syumai/dinatra/mod.ts";

const bytes = await Deno.readFile("./pages/vault/filepath.md");
const decoder = new TextDecoder("utf-8");
const content = decoder.decode(bytes);
const greeting = `<h1>File content: <span>${JSON.stringify(content)}</span><br>From Deno on Fly.ioooooopps!</h1>`;

app(
  get("/", () => greeting),
  get("/:id", ({ params }) => greeting + `</br>and hello to ${params.id}`),
);

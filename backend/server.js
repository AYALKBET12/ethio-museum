import express from "express";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { collections, exhibits, readingList, sourceCategories } from "../frontend/src/data/collections.js";
import { ethiopianLivingHeritage, ethiopianWorldHeritage } from "../frontend/src/data/unesco.js";

const app = express();
const port = Number(process.env.PORT) || 3001;
const backendDirectory = fileURLToPath(new URL(".", import.meta.url));
const frontendDirectory = resolve(backendDirectory, "../frontend/dist");
const frontendEntry = resolve(frontendDirectory, "index.html");

app.use(express.json());

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");

  if (request.method === "OPTIONS") {
    response.sendStatus(204);
    return;
  }

  next();
});

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.get("/api/museum", (_request, response) => {
  response.json({
    collections,
    exhibits,
    readingList,
    sourceCategories,
    ethiopianWorldHeritage,
    ethiopianLivingHeritage,
  });
});

app.get("/api/collections", (_request, response) => {
  response.json(collections);
});

app.get("/api/exhibits", (_request, response) => {
  response.json(exhibits);
});

app.get("/api/heritage", (_request, response) => {
  response.json({
    worldHeritage: ethiopianWorldHeritage,
    livingHeritage: ethiopianLivingHeritage,
  });
});

app.get("/api/sources", (_request, response) => {
  response.json({
    sourceCategories,
    readingList,
  });
});

app.use("/api", (_request, response) => {
  response.status(404).json({ error: "API endpoint not found" });
});

app.use(express.static(frontendDirectory, { index: false }));

app.use((request, response, next) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    next();
    return;
  }

  response.sendFile(frontendEntry, (error) => {
    if (error) {
      next(error);
    }
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Museum server listening on port ${port}`);
});

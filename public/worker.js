// Worker thread context
import { WrakerApp } from "https://cdn.jsdelivr.net/npm/wraker@0.5.2/+esm";

const app = new WrakerApp();

app.get("/hello", (req, res) => {
  res.send("Hello, Worker!");
});

app.listen(() => {
  console.log("[Worker] Worker is running.");
});

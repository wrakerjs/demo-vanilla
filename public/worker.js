// Worker thread context
import { WrakerApp } from "https://cdn.jsdelivr.net/npm/@wraker/core@0.5.3/+esm";

console.log("[Worker] Worker is starting...");
console.log(WrakerApp);

const app = new WrakerApp();

app.get("/hello", (req, res) => {
  res.send("Hello, Worker!");
});

app.listen(() => {
  console.log("[Worker] Worker is running.");
});

"use strict";

const express = require("express");
const { fetchFromCnyesURL } = require("./fetchCnyes");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

// root to make sure it works
app.get("/", (req, res) => {
  res.send("Hello World");
});

// entry point for Cynes data
app.get("/cnyes/:url(*)", async (req, res) => {
  const { url } = req.params;
  const data = await fetchFromCnyesURL(url);
  console.log("responded with data:", data);
  res.json(data);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

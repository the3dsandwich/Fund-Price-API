"use strict";

const express = require("express");
const { fetchFromCnyesURL } = require("./fetchCnyes");

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

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));

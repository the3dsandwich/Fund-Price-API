"use strict";

const express = require("express");
const { fetchCnyesByName } = require("./fetchCnyesByName");
const { fetchFromCnyesURL } = require("./fetchCnyes");
const { fetchCnyesBySearch } = require("./fetchCnyesBySearch");

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

// search for a list of funds by query
app.get("/search/:name(*)", async (req, res) => {
  const { name } = req.params;
  const data = await fetchCnyesBySearch(name);
  console.log("responded with data:", data);
  res.json(data);
});

// entry point for direct name queue
app.get("/:name(*)", async (req, res) => {
  const { name } = req.params;
  const data = await fetchCnyesByName(name);
  console.log("responded with data:", data);
  res.json(data);
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));

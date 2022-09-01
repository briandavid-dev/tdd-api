const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { users } = require("./endpoints");
const app = express();

// parse appplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const usersHandlers = users({ axios });

app.get("/", usersHandlers.get);
app.post("/", usersHandlers.post);
app.put("/:id", usersHandlers.put);
app.delete("/:id", usersHandlers.delete);

app.listen(3000);

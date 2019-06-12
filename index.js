const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const session = require("express-session");

const knex = require("knex")(require("./knexfile.js"));

const KnexSessionStore = require("connect-session-knex")(session);
const store = new KnexSessionStore({ knex });
app.use(session({ secret: "julia", cookie: { maxAge: 600000 }, store: store }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/dist"));

app.get("/", (req, res) => {
  var n = req.session.views || 0;
  req.session.views = ++n;
  res.render("app", { title: "Boom!", n });
});

app.use(express.static("dist"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

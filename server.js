const bodyParser = require('body-parser')
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.sendFile('public/home.html', { root: __dirname })
})

// const routes = require("./routes");
// const path = require("path");

// Define Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// })
app.use(express.static("./public"));

// Serve static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define API routes
// app.use(routes);
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Send other requests to the React app 
// Define API routes before this runs
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./index.html"));
// });
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});


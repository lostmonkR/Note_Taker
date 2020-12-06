
const express = require("express");
// const apiRoutes = require("./routs/apiRouts.js");
// require("./routs/apiRouts.js")(app)
// const htmlRoutes = require("./routs/htmlRouts.js");


const app = express();


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
require("./routs/apiRouts.js")(app)
require("./routs/htmlRouts.js")(app)
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
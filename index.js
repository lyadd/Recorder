const PORT = process.env.PORT || 80
process.on("unhandledRejection", (a) => { if (a.message) return undefined })

const
    express = require('express'),
    app = express(),
    cors = require('cors'),
    robots = require("express-robots-txt")

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static("public"));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 10000 }));
app.use(robots({ UserAgent: "*", Disallow: "/", }));

const routes = require('./src/all.js');

app.use('/', routes);

app.listen(PORT, () => {
    console.clear();
    console.log(`=> [${(new Date().getHours() + "").padStart(2, "0")}:${(new Date().getMinutes() + "").padStart(2, "0")}:${(new Date().getUTCSeconds() + "").padStart(2, "0")}] - API ON`);
});
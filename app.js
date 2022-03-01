const express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;
const mongoose = require("mongoose")

const siteRoute = require("./routes/siteRoute");

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/site', siteRoute);

app.get('/', (req, res) => {
    return res.json({
        hello: "world"
    })
})

mongoose
    .connect("mongodb://0.0.0.0:27017/ScrapperApp").then(() => {
        app.listen(port, () => {
            console.info(`start server start listening on port http://localhost:${port}`)
        })
    }).catch(err => console.error(err))
const mongoose = require("mongoose");
const siteSchema = new mongoose.Schema({
    siteName: {
        type: String,
        required: "The filed siteName is a required filed!"
    },
    siteUrl: {
        type: String,
        required: "The filed siteUrl is a required filed!"
    },
    selector: {
        type: String,
        required: "The filed siteUrl is a required filed!"
    },
}, {
    timestamps: true
})
siteSchema.methods.testFunc = function testFunc(params) {}
module.exports = mongoose.model('Site', siteSchema);
const Site = require('../model/site');
const axios = require('axios').default;
const {
    parse
} = require("node-html-parser");
const site = require('../model/site');

const insertSite = (siteName, siteUrl, selector) => {
    return new Promise((resolve, reject) => {
        const site = new Site({
            siteName,
            siteUrl,
            selector
        })
        site.save((err, siteData) => {
            siteData ? resolve(siteData) : reject(err)
        })
    })
}

const getAllSite = () => {
    return new Promise((resolve, reject) => {
        Site.find().then((siteData) => {
            siteData ? resolve(siteData) : reject(err)
        })
    })
}

const getOneSiteById = (_id) => {
    return new Promise((resolve, reject) => {
        Site.findById(_id)
            .then((siteData) => {
                axiosTitlePage(siteData._doc.siteUrl, siteData._doc.selector).then(data => {
                    resolve(data)
                })
            }).catch((err) => reject(err))

    })
}

function axiosTitlePage(url, selector) {
    return new Promise((resolve, reject) => {
        axios
            .get(`${url}`)
            .then(function (response) {
                let requestHtml = parse(response.data)
                if (requestHtml.querySelector(`${selector}`)) {
                    resolve(requestHtml.querySelector(`${selector}`).text)
                } else {
                    return "error"
                }
            })
            .catch(err => reject(err))
    })
}



module.exports = {
    insertSite,
    getAllSite,
    getOneSiteById,
    axiosTitlePage
}
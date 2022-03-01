const express = require('express'),
    router = express.Router();

const {
    insertSite,
    getAllSite,
    getOneSiteById,
    axiosTitlePage
} = require('../controller/siteController')

router.post('/', (req, res) => {
    const {
        name,
        url,
        selector
    } = req.body
    insertSite(name, url, selector)
        .then((siteData) => res.json(siteData))
        .catch((error) => res.json(error))
})

router.get('/', (req, res) => {
    getAllSite()
        .then((siteData) => res.json({
            siteData
        }))
        .catch((err) => res.json(err))
})

router.get('/scrape/:siteId', (req, res) => {
    getOneSiteById(req.params.siteId)
        .then(title => res.json({
            title
        }))
        .catch(err => {
            console.log(err);
            res.send(err)
        })
})


module.exports = router;
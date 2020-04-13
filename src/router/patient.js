const express = require('express')
const notasEvolucion = require('../middlewares/notasEvolucion')
const router = new express.Router()

router.post('/patient', notasEvolucion, async (req, res, next) => {
    try {
        res.send({ pdf: "OK" })
        res.redirect('')
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router
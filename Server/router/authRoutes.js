const express = require("express")
const router = express.Router()


router.get('/', (req, res) => {
    res.json("User required")
})


module.exports = router
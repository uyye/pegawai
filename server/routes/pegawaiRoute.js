const express = require("express")
const router = express.Router()
const PegawaiController = require("../controllers/pegawaiController")

router.get("/data", PegawaiController.getPegawai)

module.exports = router
const express = require("express")
const router = express.Router()
const PegawaiController = require("../controllers/pegawaiController")

router.get("/data", PegawaiController.getPegawai)
router.get("/data/pegawai", PegawaiController.detailPegawai)
router.post("/add/pegawai", PegawaiController.addPegawai)
router.post("/add/masaKerja", PegawaiController.addMasaKerja)
router.get("/data/pegawai/:id", PegawaiController.findPegawaiById)
router.put("/edit/pegawai/:id", PegawaiController.updatePegawai)
router.put("/edit/masaKerja/:id", PegawaiController.updateMasaKerja)
router.delete("/delete/pegawai/:id", PegawaiController.deletePegawai)

module.exports = router
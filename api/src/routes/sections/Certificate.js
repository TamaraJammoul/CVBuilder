const router = require('express').Router();
const { addCertificate, deleteCertificate, updateCertificate } = require('../../controller/sections/Certificate');

router.post("/addCertificate", addCertificate);
router.post("/updateCertificate", updateCertificate)
router.post("/deleteCertificate", deleteCertificate);

module.exports = router;
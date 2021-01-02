const router = require('express').Router();
const { addCertificate, deleteCertificate, updateCertificate, getCertificates } = require('../../controller/sections/Certificate');

router.post("/addCertificate", addCertificate);
router.post("/updateCertificate", updateCertificate);
router.post("/deleteCertificate", deleteCertificate);
router.post("/getCertificates", getCertificates);

module.exports = router;
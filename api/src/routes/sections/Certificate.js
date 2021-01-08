const router = require('express').Router();
const { addCertificate, deleteCertificate, updateCertificate, getCertificates, hideCertificates, copyCertificate } = require('../../controller/sections/Certificate');

router.post("/addCertificate", addCertificate);
router.post("/updateCertificate", updateCertificate);
router.post("/deleteCertificate", deleteCertificate);
router.post("/getCertificates", getCertificates);
router.post("/hideCertificates", hideCertificates);
router.post("/copyCertificate", copyCertificate);

module.exports = router;
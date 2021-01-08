const router = require('express').Router();
const { addMembership, deleteMembership, updateMembership, getMemberships, hideMemberships, unHideMemberships } = require('../../controller/sections/Memberships');

router.post('/addMembership', addMembership);
router.post('/deleteMembership', deleteMembership);
router.post('/updateMembership', updateMembership);
router.post('/getMemberships', getMemberships);
router.post('/hideMemberships', hideMemberships);

module.exports = router;
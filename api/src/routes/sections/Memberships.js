const router = require('express').Router();
const { addMembership, deleteMembership, updateMembership, getMemberships } = require('../../controller/sections/Memberships');

router.post('/addMembership', addMembership);
router.post('/deleteMembership', deleteMembership);
router.post('/updateMembership', updateMembership);
router.post('/getMemberships', getMemberships);

module.exports = router;
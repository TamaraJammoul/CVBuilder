const router = require('express').Router();
const { addMembership, deleteMembership, updateMembership } = require('../../controller/sections/Memberships');

router.post('/addMembership', addMembership);
router.post('/deleteMembership', deleteMembership);
router.post('/updateMembership', updateMembership);

module.exports = router;
const router = require('express').Router();
const { addMembership, deleteMembership } = require('../../controller/sections/Memberships');

router.post('/addMembership', addMembership);
router.post('/deleteMembership', deleteMembership);

module.exports = router;
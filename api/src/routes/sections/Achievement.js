const router = require('express').Router();
const {
    addAchievement, deleteAchievement,
    updateAchievement, getAchievements,
    copyAchievement, hideAchievements, orderAchievements
} = require("../../controller/sections/Achievement");

router.post("/addAchievement", addAchievement);
router.post("/deleteAchievement", deleteAchievement);
router.post("/updateAchievement", updateAchievement);
router.post("/getAchievements", getAchievements);
router.post("/copyAchievement", copyAchievement);
router.post("/hideAchievements", hideAchievements);
router.post("/orderAchievements", orderAchievements);

module.exports = router;
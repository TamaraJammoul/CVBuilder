const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./src/routes/auth');
const careerRouter = require('./src/routes/sections/CareerObjectives');
const certificateRouter = require('./src/routes/sections/Certificate');
const educationRouter = require('./src/routes/sections/Education');
const experienceRouter = require('./src/routes/sections/Experience');
const languageRouter = require('./src/routes/sections/Language');
const membershipRouter = require('./src/routes/sections/Memberships');
const otherTrainingRouter = require('./src/routes/sections/OtherTraining');
const personalInformationRouter = require('./src/routes/sections/PersonalInformation');
const personalSkillsRouter = require('./src/routes/sections/PersonalSkills');
const referanceRouter = require('./src/routes/sections/Referance');
const skillRouter = require('./src/routes/sections/Skill');
const CVrouter = require('./src/routes/CV');

const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
    process.env.MongoDB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log('DB connected correctly');
    }
)

mongoose.connection.on("error", (err) => {
    console.log("error connected DB");
})

app.use('/api/auth', userRouter);
app.use('/api/CV', CVrouter);
app.use('/api/career', careerRouter);
app.use('/api/certificate', certificateRouter);
app.use('/api/education', educationRouter);
app.use('/api/experience', experienceRouter);
app.use('/api/language', languageRouter);
app.use('/api/membership', membershipRouter);
app.use('/api/otherTraining', otherTrainingRouter);
app.use('/api/PersonalInformation', personalInformationRouter);
app.use('/api/personalSkills', personalSkillsRouter);
app.use('/api/referance', referanceRouter);
app.use('/api/skills', skillRouter);


app.listen(process.env.PORT || 5000, () => {
    console.log(`server running on port ${process.env.PORT}`);
});
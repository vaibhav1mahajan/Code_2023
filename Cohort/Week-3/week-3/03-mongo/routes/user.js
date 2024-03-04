const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
        const response = await User.findOne({
            username:username
        })
        if(response){
           return res.json({
                message:"User already exist"
            })
        }
        try {
            await User.create({
                username,
                password
            })
            res.json({
                message:"User created successfully"
            })
        } catch (error) {
            res.json({
                message:"User not created due to some db issue"
            })
        }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        course: response
    })
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;
    await User.updateOne({
        username:username
    },{
        "$push" : {
            purchasedCourses:courseId
        }
    })
    res.json({
        message:"Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const user = await User.findOne({
        username:username
    })
    const courses = await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })
    res.json({
        courses:courses
    })
});

module.exports = router
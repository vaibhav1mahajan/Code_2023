const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require('../db/index');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    // check whether a user with same username doesn't exist in db
    const info = await Admin.findOne({
        username:username
    })
    if(info){
        return res.json({
            msg:"Admin already exist"
        })
    }
    const newAdmin = new Admin({
        username:username,
        password:password
    })
    try {
        await newAdmin.save();
        res.json({
            message: "Admin created successfully"
        });
    } catch (error) {
        // If an error occurs during the save operation, handle it here
        res.status(500).json({
            error: "An error occurred while saving the new admin"
        });
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const newCourse = new Course({
        title,
        description,
        price,
        imageLink
    })
    newCourse.save()
        .then(()=>{
            res.json({
                message: 'Course created successfully', courseId: newCourse._id
            })
        }).catch((err)=>{
            res.json({
                message:"Course doesn't created"
            })
        })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        course: response
    })

});

module.exports = router;
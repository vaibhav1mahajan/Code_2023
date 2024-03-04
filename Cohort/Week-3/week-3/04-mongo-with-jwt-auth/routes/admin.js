const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require('jsonwebtoken');
const {jwtPassword} = require('../config');
const { Admin ,Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const response = await Admin.findOne({
        username:username
    });
    if(response){
        console.log(response);
        return res.json({
            message:"This username already exist as admin"
        })
    }
    try {
        await Admin.create({
            username,password
        })
        res.json({
            message:"Admin created successfully"
        })
    } catch (error) {
        res.json({
            message:"Admin not created"
        })
    }
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const response = Admin.findOne({
        username:username,
        password:password
    });
    if(!response){
        return res.status(411).json({
            message:"Incorrect username or password"
        })
    }
    const token =  jwt.sign({username:username},jwtPassword);
    return res.json({
        token
    })

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

router.get('/courses',adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});
    res.json({
        course: response
    })

});

module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkaXR5YUBnbWFpbC5jb20iLCJpYXQiOjE3MDcwNjk1MDV9.xyqjL3d12ecFQa8RAmFKe87GWu43TB2w4WFQtdCHPM4
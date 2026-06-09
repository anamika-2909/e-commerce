const express = require('express');
const Managepro = require('../model/Managepro');
const multer = require('multer');
const router = express.Router();
const upload = require("../middleware/imageUpload")
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");


router.post("/manageproduct" ,auth,admin, upload.single('image'), async (req, res) => {
    try {
        const { productName, description,price } = req.body;
        console.log(productName, description,price)
       const imagepath=req.file.filename
       console.log(imagepath)
        const abc = new Managepro({
            productName, 
            description, 
            image:imagepath, 
            price,
        })
        await abc.save()
        res.status(200).json("Add product successfully")
    }
    catch (err) {
        res.status(500).json({
            message: "Error add product",
            error: err.message
        });
    }
})

// get method 
router.get("/product", async (req, res) => {
    try {
        const data = await Managepro.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send("Error add product")
    }
});

module.exports = router;
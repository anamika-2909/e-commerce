const express = require('express');
const MyCategory = require('../model/categoryschema');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'upload/' })

router.post("/category", upload.single('cimage'), async (req, res) => {
    try {
        const { cName, description, status } = req.body;
        console.log(cName, description, status)
        const imagepath = req.file.filename
        console.log(imagepath)
        const abc = new MyCategory({
            cName,
            description,
            cimage: imagepath,
            status,
        })
        await abc.save()
        res.status(200).json("Add category successfully")
    }
    catch (err) {
        res.status(500).json({
            message: "Error add category",
            error: err.message
        });
    }
})


router.get("/category", async (req, res) => {
    try {
        const data = await MyCategory.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send("Error add product")
    }
});
module.exports = router;
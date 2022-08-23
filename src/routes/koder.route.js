// Endpoints
const express = require("express");
const { create } = require("../usecases/koder.usecase");

const router = express.Router();

//Create
router.post("/", async (request, response) => {
    const { body } = request;
    try{
        const koder = await create(body);
        response.status(201)
        response.json({
            success: true,
            data: {
                koder
            }
        });
    }
    catch(error){
        response.status(400)
        response.json({
            success: false,
            message: error.message
        });
    }    
});

//Export
module.exports = router;
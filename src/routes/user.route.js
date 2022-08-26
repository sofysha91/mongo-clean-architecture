// Endpoints
const express = require("express");
const { createUser } = require("../usecases/user.usecase");

const router = express.Router();

//Create
router.post("/", async (request, response) => {
    const { body } = request;
    try{
        const user = await createUser(body);
        response.status(201)
        response.json({
            success: true,
            data: {
                user
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
module.exports = router;// Endpoints

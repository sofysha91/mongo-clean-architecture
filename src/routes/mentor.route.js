// Endpoints
const express = require("express");
const { get, create, update, deleteMentor } = require("../usecases/mentor.usecase");

const router = express.Router();

//Get
router.get("/", async (request, response) => {
    const { body } = request;
    try{
        const mentor = await get(body);
        response.status(200)
        response.json({
            success: true,
            data: {
                mentor
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

//Create
router.post("/", async (request, response) => {
    const { body } = request;
    try{
        const mentor = await create(body);
        response.status(201)
        response.json({
            success: true,
            data: {
                mentor
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

//Update
router.put("/:id", async (request, response) => {
    const { params, body } = request;
    try{
        const mentor = await update(params.id, body);
        response.status(200)
        response.json({
            success: true,
            data: {
                mentor
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

//Update
router.delete("/:id", async (request, response) => {
    const { params } = request;
    try{
        const mentor = await deleteMentor(params.id);
        response.status(200)
        response.json({
            success: true,
            message: "Mentor succesfully deleted"
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
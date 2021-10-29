const { validationResult } = require('express-validator');

class HikeController {
    constructor({ hike }) {
        this.hikeService = hike
    }

    async findOne(req, res, next){
        const { id } = req.params

        let hike;

        try{
            hike = await this.hikeService.findOne({
                query: {
                    _id: id
                }
            })
        }
        catch(e){
            return next(e)
        }

        return res.json({
            hike
        })
    }

    async findAll(req, res, next){
        
        let hikes
        
        try{
            hikes = await this.hikeService.findMany({})
        }
        catch(e){
            return next(e)
        }

        return res.json({
            hikes
        })
    }

    async createOne(req, res, next){
        
        let hike

        try{
            hike = await this.hikeService.createOne({
                query: {
                    ...req.body
                }
            })
        }
        catch(e){
            return next(e)
        }

        return res.json({
            hike
        })
    }

    async deleteOne(req, res, next){
        
    }

    async updateOne(req, res, next){

    }
}

module.exports = AccessController;

class EventController {
    constructor({ event }) {
        this.eventService = event
    }

    async findOne(req, res, next){
        const { id } = req.params

        let event;

        try{
            event = await this.eventService.findOne({
                query: {
                    _id: id
                }
            })
        }
        catch(e){
            return next(e)
        }

        return res.json({
            event
        })
    }

    async findAll(req, res, next){
        
        let events
        
        try{
            events = await this.eventService.findMany({})
        }
        catch(e){
            return next(e)
        }

        return res.json({
            events
        })
    }

    async createOne(req, res, next){
        
        let event

        try{
            event = await this.eventService.createOne({
                query: {
                    ...req.body
                }
            })
        }
        catch(e){
            return next(e)
        }

        return res.json({
            event
        })
    }

    async deleteOne(req, res, next){
        
    }

    async createMany(req, res, next){
        const { list } = req.body;

        let events;
        try{
            events = await this.eventService.createMany({
                list
            })
        }
        catch(e){
            return next(e)
        }

        return res.json({
            events
        })
    }

    async updateOne(req, res, next){

    }
}

module.exports = EventController;

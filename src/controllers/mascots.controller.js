const Mascots = require('../models/masctos')

const HomeRoute = (req, res) => {
    res.json({
        api: "@1.0.0"
    })
}

const GetMascot = async (req, res) => {
    try {
        const mascotsDB = await Mascots.find()
        res.json({
            mascots: mascotsDB
        })
    }
    catch(err) {
        res.json({
            message: err.message
        })
    }
}

const GetOneMascot = async (req, res) => {
    const id = req.params.id
    try {
        const mascotsDB = await Mascots.findOne({ _id: id })
        res.json({
            mascot: mascotsDB,
        })
    } catch (error) {
        res.json({
            message: 'No se encuentra la Macota'
        })
    }
}

const CreateMascot = async (req, res) => {
    const body = req.body
    try {
        const masctoDB = new Mascots(body)
        await masctoDB.save()
        res.status(201).json({
            created: true
        })
    }
    catch(err) {
        res.json({
            created: false,
            message: err.message
        })
    }
}

const DeleteMascot = async (req, res) => {
    const id = req.params.id;
    try {
        const mascotaDB = await Mascots.findByIdAndDelete({ _id: id });
        console.log(mascotaDB)
        if (!mascotaDB) {
            res.json({
                deleted: false,
            })
        } else {
            res.json({
                deleted: true,
            })
        }   
    } 
    catch (err) {
        res.json({
            message: err.message
        })
    }
}

const UpdateMascot = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        await Mascots.findByIdAndUpdate(id, body, { useFindAndModify: false })
        res.json({
            updated: true,
        })
    } 
    catch (err) {
        res.json({
            updated: false,
        })
    }
}





module.exports = {
    HomeRoute,
    GetMascot,
    CreateMascot,
    GetOneMascot,
    DeleteMascot,
    UpdateMascot
}
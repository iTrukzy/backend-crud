const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const MascotsModels = new Schema({
    name: String,
    especie: String,
    edad: Number,
    descripcion: String,
    img: String,
    createDate: {
        type: Date,
        default: Date.now,
    },
})

const Mascots = mongoose.model('mascots', MascotsModels)


module.exports = Mascots;
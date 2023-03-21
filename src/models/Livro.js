import mongoose, { Schema } from "mongoose";

const livroSchema = new Schema ({
    id: {type: String},
    titulo: {type: String, require: true},
})

const catalogo = mongoose.model('catalogo', livroSchema)

export default catalogo
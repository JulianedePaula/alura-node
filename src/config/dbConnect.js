import mongoose from "mongoose";

mongoose.connect('mongodb+srv://julianebarbarapaula:juliane77992@cluster0.el3vopp.mongodb.net/alura-node')

let db = mongoose.connection

export default db
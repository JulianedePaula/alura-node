import express from "express";
import catalogo from "./livrosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: 'Curso de Node'})
    })

    app.use(
        express.json(),
        catalogo
    )
}

export default routes
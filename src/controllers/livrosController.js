import catalogo from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        catalogo.find((err, catalogo) => {
            res.status(200).json(catalogo)
    })

    }

    static listarLivroPorID = (req, res) => {
        const id = req.params.id
        catalogo.findById(id, (err, catalogo) => {
            if (!err) {
                res.status(201).send(catalogo)
            } else {
                res.status(400).send({message: `${err} - Id não identificado.`})
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        const livro = new catalogo(req.body)

        livro.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar livro.` })
            } else {
                res.status(201).send(catalogo.toJON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id

        catalogo.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso.'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deletarLivro = (req, res) => {
        const id = req.params.id
        
        catalogo.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: 'Livro removido com sucesso.'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default LivroController
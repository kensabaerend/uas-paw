const db = require("../models")
const etalase = db.etalase

exports.create = (req, res) => {
    // req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)
    etalase.create(req.body)
    .then(() => res.send({message: "Data Berhasil disimpan"}))
    .catch(err => res.status(500).send({message: err.message}));
}

exports.findAll = (req, res) => {
    etalase.find()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}));
    
}

exports.show = (req, res) => {
    const id = req.params.id;

    etalase.findById(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message}));
}

exports.update = (req, res) => {
    const id = req.params.id;

    // req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)

    etalase.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if (!data) {
            res.status(404).send({message : "Tidak dapat mengupdate"})
        }
        res.send({message: "Data Terupdate"})
    })
    .catch(err => res.status(500).send({message: err.message}));
}

exports.delete = (req, res) => {
    const id = req.params.id;


    etalase.findByIdAndDelete(id)
    .then(data => {
        if (!data) {
            res.status(404).send({message : "Tidak dapat menghapus data"})
        }
        res.send({message: "Data Terhapus"})
    })
    .catch(err => res.status(500).send({message: err.message}));
}
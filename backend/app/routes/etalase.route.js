module.exports = app => {
    const etalase = require("../controller/etalase.controller")
    const r = require("express").Router();

    r.get("/", etalase.findAll);
    r.get("/:id", etalase.show);
    r.post("/", etalase.create);
    r.put("/:id", etalase.update);
    r.delete("/:id", etalase.delete);


    app.use("/etalase", r);
}
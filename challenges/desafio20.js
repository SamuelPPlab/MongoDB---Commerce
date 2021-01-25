db.produtos.update({ nome: "Big Mac" }, { $unset: { curtidas: "145" } });
db.produtos.find({}, { nome: 1, curtidas: 1, _id: 0 });

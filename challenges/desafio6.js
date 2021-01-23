db.produtos.updateMany({ nome: { $in: ["Big Mac", "McChicken"] } }, { $push: { ingredientes: "Bacon" } });

db.produtos.find({}, { nome: 1, _id: 0, ingredientes: 1 }).pretty();

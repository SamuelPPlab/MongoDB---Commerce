db.produtos.updateMany({ nome: { $exists: ["McChicken", "Quarteirão com Queijo"] } }, { $addToSet: { ingredientes: "ketchup" } });
// db.produtos.find({ }, { _id: 0, nome: 1, ingredientes: 1 });

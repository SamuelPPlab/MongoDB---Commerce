db.produtos.updateMany({ }, { $push: { "vendasPorDias": { $each: [0, 0, 0, 0, 0, 0, 0] } } });
db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDias.3": 60 } });
db.produtos.updateMany({ $and: [{ tags: "bovino"}, {tags: "pão" }] }, { "vendasPorDias.6": { $inc: 120 } });
db.produtos.find({ }, { nome: true, vendasPorDia: true, _id: false });

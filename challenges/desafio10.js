db.produtos.updateMany({ },
  { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } });
db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });
db.produtos.updateMany({ $and: [{ tags: "bovino" }, { tags: "pão" }] }, { "vendasPorDia.6": { $inc: 120 } });
db.produtos.find({ }, { nome: true, vendasPorDia: true, _id: false });

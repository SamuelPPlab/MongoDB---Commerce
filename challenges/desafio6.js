db.produtos.update({ $or: [{ nome: "Big Mac" }, { nome: "Quarteirão com Queijo" }] }, {
  $push: { ingredientes: { $each: ["bacon"] } },
},
false,
true);

db.produtos.find({}, {
  nome: true,
  ingredientes: true,
  _id: false,
});

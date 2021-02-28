db.produtos.update({ nome: { $not: { $regex: /McChicken/ } } }, {
  $addToSet: { ingredientes: "ketchup" },
},
false,
true);

db.produtos.find({}, {
  nome: true,
  ingredientes: true,
  _id: false,
});

db.produtos.find({ $exp: { $gt: ["$curtidas", "$vendidos"] } },
  { nome: 1, _id: 0 });

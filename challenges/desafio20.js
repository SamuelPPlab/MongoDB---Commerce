db.produtos.update(
  { nome: { $regex: /big mac/gi } },
  { $unset: { curtidas: "" } },
);

db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 });

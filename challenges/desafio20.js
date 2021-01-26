db.produtos.updateOne(
  { name: "Big Mac" },
  { $unset: { curtidas: "" } },
);

// db.produtos.deleteOne(
//   { name: "Big Mac" },
//   { curtidas: 145.0 },
// );

db.produtos.find(
  {},
  { nome: 1, curtidas: 1, _id: 0 },
);

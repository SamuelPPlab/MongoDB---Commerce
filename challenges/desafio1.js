db.produtos.updateMany(
  { },
  { $set: { criadoPor: "Ronald McDonald" } },
);

db.products.find(
  { },
  { nome: 1, criadoPor: 1, _id: 0 },
);

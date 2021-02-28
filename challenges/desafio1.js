db.produtos.update({}, { $set: { criadoPor: "Ronald McDonald" } }, true, true);

db.produtos.find({}, {
  nome: true,
  criadoPor: true,
  _id: false,
});

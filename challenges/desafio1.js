db.produtos.updateMany({}, { $set: { criadoPor: "Ronald MacDonald" } });
db.produtos.find({}, { criadoPor: 1, nome: 1, _id: 0 });

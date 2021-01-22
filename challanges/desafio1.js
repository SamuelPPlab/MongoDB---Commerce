db.produtos.updateMany({ }, { $set: { criadoPor: "Ronald McDonald" } });
db.produtos.updateMany({ }, { nome: true, criadoPor: true, _id: false });

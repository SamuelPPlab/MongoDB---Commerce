db.produtos.find({ $elemMatch: { nome: "mc" }, $caseSensitive: false });

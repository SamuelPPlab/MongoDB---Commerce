db.produtos.find({ $expr: "this.produtos.vendidos % 5 === 0" }, { nome: 1, _id: 0, vendidos: 1 });

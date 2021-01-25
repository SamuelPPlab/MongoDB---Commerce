db.produtos.find({ $where: "this.ingredientes.length === 4" }).count();

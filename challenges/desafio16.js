db.produtos.find({ tags: { $size: 4 } }).count();

db.produtos.find({ $text: { $search: "frango hambúrguer" } }).count();

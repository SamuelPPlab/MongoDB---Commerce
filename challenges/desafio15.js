db.produtos.find({ $text: { $search: "mc" }, $caseSensitive: false });

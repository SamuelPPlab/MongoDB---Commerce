db.produtos.createIndex({ type: "text", description: "portuguese" });
db.produtos.find({ $text: { $search: "\"feito com\"" } }).count();

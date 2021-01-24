db.produtos.createIndex({ tipo: "text", descricao: "portuguese" });
db.produtos.find({ $text: { $search: "frango hamburguer" } }).count();

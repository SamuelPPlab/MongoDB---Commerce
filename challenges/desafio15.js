// db.produtos.count({ nome: /mc/i });
// db.artists.count({ nome: { $regex: /^Mc/i } });
db.artists.count({ nome: /^Mc/i });

// db.produtos.find({ nome: /mc/i }).count();
db.artists.count({ nome: { $regex: /Mc/i } });
// db.artists.count({ nome: /Mc/i });

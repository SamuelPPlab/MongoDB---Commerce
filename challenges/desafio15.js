// db.produtos.find({ nome: /mc/i }).count();
db.artists.find({ nome: { $regex: /Mc/i } }).count();
// db.artists.count({ nome: /Mc/i });

db.produtos.updateMany({}, { valoresNutricionais: { $sort: { percentual: -1 } } });
db.produtos.find({}, { nome: 1, valoresNutricionais: 1, _id: 0 });

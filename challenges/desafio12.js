db.produtos.updateMany({ }, { valoresNutricionais: { $each: "percentual" }, $sort: { percentual: -1 } });
db.produtos.find({ }, { nome: true, valoresNutricionais: true, _id: false });

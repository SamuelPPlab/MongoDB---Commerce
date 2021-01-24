db.produtos.updateMany({ }, { $push: { valoresNutricionais: { $each: [] } }, $sort: { percentual: -1 } });
db.produtos.find({ }, { nome: true, valoresNutricionais: true, _id: false });

{ $push: { <field>: { $each: [ <value1>, <value2> ... ] } } }
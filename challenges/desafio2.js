db.produtos.updateMany({ valorUnitario: { $exists: false } }, { $set: { valorUnitario: NumberDecimal("0.00") } }, { _id: 0, nome: 1, valorUnitarior: 1 });

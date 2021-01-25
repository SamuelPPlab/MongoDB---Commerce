db.produtos.update({ nome: "Big Mac" }, { $currentDate: { ultimaModificacao: true } });

db.find({ ultimaModificacao: { $exists: true } }, { _id: 0, nome: 1 });

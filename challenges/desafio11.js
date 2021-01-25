db.produtos.updateMany({},
  { $puch: { tags: { $each: ["combo", "tasty"], sort: 1 } } });
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 }).pretty();

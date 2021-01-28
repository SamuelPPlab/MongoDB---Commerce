const WEEK_REPORT = [0, 0, 0, 0, 0, 0, 0];
const TAGS = ["bovino", "pão"];
db.produtos.updateMany({}, {
  $set: { vendasPorDia: WEEK_REPORT }
});

db.produtos.updateOne({ nome: "Big Mac" }, {
  $inc: {"vendasPorDia.3": 60 },
});

db.produtos.updateOne({ tags: { $all: TAGS } }, {
  $inc: { "vendasPorDia.6": 120 },
});

db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });

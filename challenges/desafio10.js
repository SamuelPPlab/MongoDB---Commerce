db.produtos.updateMany(
  {},
  {
    $addToSet: {
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    },
  },
);

/* dias: {
  dom: 0,
  seg: 1,
  ter: 2,
  qua: 3,
  qui: 4,
  sex: 5,
  sab: 6,
} */

db.produtos.find(
  { nome: "Big Mac" },
  {
    $inc: {
      "vendasPorDia.3": 60,
    },
  },
);

db.produtos.find(
  {
    ingredientes: {
      $in: ["bovino"],
    },
  },
);

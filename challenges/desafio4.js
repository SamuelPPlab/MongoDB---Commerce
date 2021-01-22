db.customers.updateOne(
  { nome: "Big Mac" },
  { $currentDate: {
    ultimaModificacao: true,
    "cancellation.date": { $type: "timestamp" },
  },
  $set: {
    "cancellation.reason": "user request",
    status: "D",
  },
  },
);
db.produtos.find({}, { nome: 1, ultimaModificacao: 1, _id: 0 });

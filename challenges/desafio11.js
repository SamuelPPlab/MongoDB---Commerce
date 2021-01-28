const NEW_TAGS = ["combo", "tasty"];

db.produtos.updateMany({}, {
  $push: { tags: {
    $each: NEW_TAGS,
    $sort: 1,
  } },
});

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });

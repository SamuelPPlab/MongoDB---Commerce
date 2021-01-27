db.produtos.createIndex(
  {
    descricao: text,
  },
  {
    language: "portuguese",
  },
);
db.produtos.count({
  $text: {
    $search: "frango hamburguer",
  },
});

db.inventory.find({ qty: { $mod: [4, 0] } });

db.produtos.find(
  { vendidos: { $mod: [5, 0] } },
  { nome: 1, vendidos: 1, _id: 0 },
);

/* agradecimento à iniciativa de montar e compartilhar um repositório, dos colegas
da turma: Lucas Gomide, Isablla Joviano e Cleyton de Oliveira. Somado às minhas
anotações e buscas na internet me ajudou em alguns momentos do projeto e foi ótimo.
Gratidão! link do PR: https://github.com/LucasSGomide/MongoDB */

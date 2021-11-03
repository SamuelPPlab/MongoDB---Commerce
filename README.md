# Habilidades
Neste projeto, será necessário:

  * Utilizar o método updateOne() e updateMany();

  * Utilizar os operadores $set , $mul , $inc , $min , $max e $currentDate;

  * Renomear campos e remover campos;

  * Incorporar dados aos documentos através de arrays;

  * Utilizar os operadores $pop , $pull e $push;
  
  * Utilizar o operador $addToSet;

  * Utilizar os operadores $each , $slice e $sort;

  * Utilizar o operador $all para filtrar documentos;

  * Utilizar o operador $elemMatch para filtrar documentos;

  * Utilizar o operador $size para filtrar documentos pelo tamanho de arrays;

  * Utilizar o operador $expr para criar expressões de agregação;

  * Utilizar expressões regulares e o operador $regex para buscar documentos;

  * Utilizar o índice textual e o operador $text;

  * Utilizar o operador $mod;

---

# O Projeto:

A ideia é trabalhar com o banco de dados `commerce`, que contém dados do cardápio do **McDonald's**, como ingredientes, valores nutricionais e dados fictícios de vendas. As instruções de como restaurar o banco podem ser lidas a seguir.

Os arquivos devem conter apenas o código MQL (_Mongo Query Language_) do desafio resolvido. **Não se esqueça de incluir o ponto e vírgula (";")** no final de suas queries, como no exemplo a seguir:


# Instruções para restaurar o banco de dados `commerce`:

1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro com uma mensagem como **_Connection refused_**, tente reiniciar sua instância ([veja como fazer isso aqui](https://app.betrybe.com/course/back-end/mongodb/introduction/conteudos/conectando)).

2. Agora que você tem certeza de que a sua instância está no ar e que você está conectado a ela, digite `exit`. Você voltará ao terminal para iniciar a importação dos dados.

3. Na raiz do diretório do projeto, execute o seguinte comando que fará a restauração da base de dados `commerce`:
   ```sh
   DBNAME=commerce ./scripts/resetdb.sh assets/produtos
   ```

- A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.

const app = require("./src/app");

const PORT = 8080;

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`O Nosso app esta rodando na porta ${PORT}`);
});
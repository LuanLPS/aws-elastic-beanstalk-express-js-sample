const express = require('express');
const app = express();
const port = 8080;


app.get('/', (req, res) => res.send('Aprovacao Manual do Pipeline - Estagio de Revisão'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

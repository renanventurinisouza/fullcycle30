const express = require('express')
const app = express()
const port = 3000
// Configurações de conexão com o banco de dados
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const mysql = require('mysql2');
const connection = mysql.createConnection(config)

// Conectar ao banco de dados
connection.connect(err => {
  if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
  }
  console.log('Conexão bem-sucedida com o banco de dados!');
});

app.listen(port, ()=> {
  console.log('Rodando na porta ' + port)
})

const sql = 'INSERT INTO people(name) values("Another Name")'
connection.query(sql)

const consulta = 'SELECT * FROM people'

app.get('/',(req,res) => {
  connection.query(consulta, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar registros');
    } else {
      let html = '<table border="1" cellspacing="0" cellpadding="5">';
      html += '<thead><tr><th>Id</th><th>Nome</th></tr></thead><tbody>';

      results.forEach(row => {
        html += `
          <tr>
            <td>${row.id}</td>
            <td>${row.name}</td>
          </tr>`;
      });

      html += '</tbody></table>';

      res.send('<h1>Full Cycle Rocks!!</h1>' + html)
    }
  })
})

app.get('/registros',(req,res) => {
  connection.query('SELECT * FROM people', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao buscar registros');
    } else {
      res.json(results);
    }
  });
})
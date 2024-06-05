const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('todo_app.db'); // Para persistência

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    completed INTEGER
  )`);

  // Adicionando 4 tarefas
  db.run("INSERT INTO tasks (title, description, completed) VALUES ('Tarefa 1', 'Descrição da Tarefa 1', 0)");
  db.run("INSERT INTO tasks (title, description, completed) VALUES ('Tarefa 2', 'Descrição da Tarefa 2', 0)");
  db.run("INSERT INTO tasks (title, description, completed) VALUES ('Tarefa 3', 'Descrição da Tarefa 3', 0)");
  db.run("INSERT INTO tasks (title, description, completed) VALUES ('Tarefa 4', 'Descrição da Tarefa 4', 0)");
});

module.exports = db;
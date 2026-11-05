const express = require('express');
const app = express();
let todos = [];

app.use(express.json());

app.get('/todos', (req, res) => res.json(todos));
app.post('/todos', (req, res) => {
  todos.push(req.body.task);
  res.json({ message: 'Task added' });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log('App running on port 3000');
  });
}

module.exports = app;
// Jira and GitHub integration - KAN-1

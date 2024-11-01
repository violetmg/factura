// Conexión a la base de datos
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mi_inventario'
});

connection.connect();

// Crear producto
app.post('/producto', (req, res) => {
  const { referencia, cantidad, precio, talla } = req.body;
  const query = 'INSERT INTO inventario (referencia, cantidad, precio, talla) VALUES (?, ?, ?, ?)';
  connection.query(query, [referencia, cantidad, precio, talla], (err, result) => {
    if (err) throw err;
    res.json({ success: true });
  });
});

// Leer productos
app.get('/productos', (req, res) => {
  const query = 'SELECT * FROM inventario';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Actualizar producto
app.put('/producto/:id', (req, res) => {
  const { id } = req.params;
  const { referencia, cantidad, precio, talla } = req.body;
  const query = 'UPDATE inventario SET referencia = ?, cantidad = ?, precio = ?, talla = ? WHERE id = ?';
  connection.query(query, [referencia, cantidad, precio, talla, id], (err, result) => {
    if (err) throw err;
    res.json({ success: true });
  });
});

// Eliminar producto
app.delete('/producto/:id'), (req, res) => {
  const { id } = req.params};

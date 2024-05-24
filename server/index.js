const express = require('express');
const app = express();
const port = 3000;
const db = require('./models');
const adminRouter = require('./routes/admin.routes');
const userRoutes = require('./routes/user.routes');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.use('/admin',adminRouter);
app.use('/user', userRoutes);

db.sequelize.sync({force: false}).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

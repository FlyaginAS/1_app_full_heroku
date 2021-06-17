const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.DATABASE_ATLAS;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful');
  });

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});


//safdsfsafsaf

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const articleRouter = require('./routes/articleRoutes');
const userRouter = require('./routes/userRoutes');
const blogRouter = require('./routes/blogRoutes');
const videoRouter = require('./routes/videoRoute');
const sourceRouter = require('./routes/sourceRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));
// app.use((req, res, next) => {
//   console.log('this is my middleware');
//   next();
// });

//controllers

//routes

app.use('/api/v1/articles', articleRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/videos', videoRouter);
app.use('/api/v1/resources', sourceRouter);
//поледним миддлвар для статического сервера

module.exports = app;

//server

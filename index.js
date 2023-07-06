const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT|| 3000;

app.use(cors())

const news = require('./category-Data.json');

app.get('/news',  (req, res) =>{
    res.send(news)

});

app.get('/news/:id', (req, res) =>{
    const id = req.params.id;
    const selectNews = news.find(n =>n.id === id);
    res.send(selectNews);

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
const express = require('express');
const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', './souce');

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(port, () => {
    console.log(`app running on ${port}`);
});
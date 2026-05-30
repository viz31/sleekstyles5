const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/bag', (req, res) => {
    res.render('bag');
});

app.get('/category/:gender/:product', (req, res) => {
    const val = req.params.gender;
    const p = req.params.product;
    if (val === 'male') {
        if (p === 'shirt') res.render('menShirt');
        else if (p === 'jacket') res.render('menJacket');
    } else if (val === 'female') {
        if (p === 'shirt') res.render('womenShirt');
        else if (p === 'jacket') res.render('womenJacket');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('listening at port ' + port);
});

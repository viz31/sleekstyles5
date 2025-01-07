


console.log('printing details');
const { response } = require("express");
var express = require("express");
var app = express();
const port = 3000;

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render(__dirname + '/views/index.ejs');
    
});

app.get('/views/index.ejs', (req, res) => {
    res.render(__dirname + '/views/index.ejs');
});

app.get('/views/index.ejs#men', (req, res) => {
    res.render(__dirname + '/views/index.ejs#men');
});

app.get('/views/index.ejs#women', (req, res) => {
    res.render(__dirname + '/views/index.ejs#women');
});

app.get('/views/bag.ejs', (req, res) => {
    res.render(__dirname + '/views/bag.ejs');
});


app.get("/category/:gender/:product", (req, res) => {
    const val = req.params.gender;
    if(val === "male"){
        const p = req.params.product
        if (p == "shirt"){
            res.render(__dirname + '/views/menShirt.ejs');
        }
        else if (p == "jacket"){
            res.render(__dirname + '/views/menJacket.ejs');
        }
    } else if(val === "female"){
        const p = req.params.product
        if (p == "shirt"){
            res.render(__dirname + '/views/womenShirt.ejs');
        }
        else if (p == "jacket"){
            res.render(__dirname + '/views/womenJacket.ejs');
        }
    }
})

app.listen(3000, ()=>{
    console.log(`listening at port 3000..`)
})











const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
// script.use(express.static(path.join('../public')));



// const generalrequirements = [
//     {title: 'APN Program Requirements', body: 'What service path membership did the partner join?' },
//     {title: 'AWS Partner Microsite', body: 'Does The partner have a Microsite?' },
//     {title: 'AWS Partner Self-Assessment', bod: 'Does the partner complate the Self-Assessment Spreadsheet for each case study?' },
// ]




app.get('/',(req,res)=> {
res.render('pages/index', {

 title:"Landing Page"

})
})


app.get('/option',(req,res) => {
    res.render('pages/option');
});


app.get('/rds',(req,res) => {
    res.render('pages/rds',{

     title:"SDP: RDS rpogram"
    })
});



app.get('/migration',(req,res) => {
    res.render('pages/migration',{

     title:"Migration comptency"
    })
});

app.get('/report',(req,res) => {
    res.render('pages/report',{

        title:"Report"
       })
});

app.get('/sharedreq', (req, res) => {

    res.render('partials/sharedreq', {
        sharedreq: generalrequirements
    })
})


app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})
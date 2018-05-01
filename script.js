const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));//It shld be public folder only
//dont add the sub folder name to this absolute path and also dont change
// the folder name(this code -> We need to register all the static files to Nodejs)
hbs.registerPartials(__dirname + '/views/partials')

// hbs.registerHelper('nameAndDesignation', () =>{
//     return ''
// })
app.get('/', (request, response) => {
    response.render('home.hbs', {
        //2nd argum is obj
        pageTitle: 'Home Page',
    });

})


app.get('/home.hbs', (request, response) => {
    response.render('home.hbs', {
        //2nd argum is obj
        pageTitle: 'Home Page',
    });

})

app.get('/resume.hbs', (request, response) => {
    response.render('resume.hbs', {
        //2nd argum is obj
        pageTitle: 'Resume Page',
    });

})

app.get('/projects.hbs', (request, response) => {
    response.render('projects.hbs', {
        //2nd argum is obj
        pageTitle: 'Resume Page',
    });

})

app.get('/contact.hbs', (request, response) => {
    response.render('contact.hbs', {
        //2nd argum is obj
        pageTitle: 'Resume Page',
    });

})



app.listen(3000, () => {
    console.log('Server is up @3000')
})
// Load express
// Require modules (general steps)
const express = require('express');

// Create our express app (general steps)
const app = express();

// Configure the app (app.set)
const fs = require('fs') // this engine requires the fs module
app.engine('madeline', (filePath, options, callback) => {  //define the view engine
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)
        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#msg#', '<h1>' + options.message + '</h1>')
            .replace('#content#','<div>'+ options.content + '</div>')
            .replace('#content2#','<div>'+ options.content2 + '</div>')
        return callback(null, rendered)
    }) 
})

app.set('views', './views')  // specify the views directory
app.set('view engine', 'madeline')


// Mount middleware (app.use)


// mount routes (general step)
// Define a "root" route directly on app
// Next time, we'll use best practice routing
// app.get('/', function (req, res) {
//     res.send('<h1>Hello World!</h1>');
// });

app.get('/', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
  })
  
  app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
  })
  
  app.get('/another-one', (req, res) => {
    res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
  })

  app.get('/another-one2', (req, res) => {
    res.render('template2', {  message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win', content2: 'what?' })
  })

  app.get('/new-path', (req, res) => {
    res.render('template', { title: 'Somthing Else', message: 'Message Goes Here', content: 'No real content' })
  })

// i want to add the path /home and I want it to respond with 
// <h1> Home Page </h1>
app.get('/home', function (req, res) {
    res.send('<h1>Home page </h1>');
});


// Tell the app to listen on port 3000 (general steps)
// for HTTP requests from clients
app.listen(3000, function() {
    console.log('Listenting on port 3000');
})
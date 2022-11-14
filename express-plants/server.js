const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

// make sure you have the routes going from most specific to more general
app.get('/flower-list', (req, res) => {
    res.send('flower list');
})

app.get('/awesome', (req, res) => { //this will never be reached
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `);
  });

  app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});

app.get('/howdy/:firstName', function(req, res) {
    console.log(req.params);
    console.log(req.query);
    res.send('hello ' + req.query.title + ' ' + req.params.firstName);
  });

app.get('/:indexOfPlantsArray', (req, res) => {
    // console.log('in first get')
    if (plants[req.params.indexOfPlantsArray]) {
        res.send(plants[req.params.indexOfPlantsArray]);
    } else {
        res.send('cannot find anything at this index: ' + req.params.indexOfPlantsArray)
    }
});







app.listen(port, () => {
    console.log('listening on port', port)
});
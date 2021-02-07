const db = require('../db/db.json');
const router = require('express').Router();

//bonus consider errors

//get notes
router.get('/notes', (req, res) => {
  // res.json(notes);
});

//post notes
router.post('/notes/', (req, res) => {
  //read fsread db
  //create a new id and set a new id
  //push note posted into the array
  //fswrite
  //if succesful return a boolean
  
});

//delete notes

router.delete('/notes/:id', (req, res) => {
  //grab the id for the note to delete comes from params
  //read file
  // find the object with id suggest using filter
  // remove that object from the array which is our db
  // return a boolean
  
});

module.exports = router;


//old code

// module.exports = (app) => {

// 	app.get('/api/notes/:character', (req, res) => {
//     const chosen = req.params.notes;
  
//     console.log(chosen);

//     for (let i = 0; i < notes.length; i++) {
//       if (chosen === notes[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
  
//     return res.json(false);
//   });
  
//     app.post('/api/notes', (req, res) => {
//     const newNote = req.body;

//     newNote.routeName = newNote.name.replace(/\s+/g, '').toLowerCase();
//     console.log(newNote);
  
//     notes.push(newNote);
//     res.json(newNote);
//   });


// };

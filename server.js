const express = require('express');
const fs = require('fs');
const path = require('path');
const htmlRoutes = require('./routes/htmlRoutes')  
const apiRoutes = require('./routes/apiRoutes') 

const app = express();

const PORT = process.env.PORT || 8080;
// const notes = {};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

// app.get('/api/notes/:character', (req, res) => {
//     const chosen = req.params.notes;
  
//     console.log(chosen);

//     for (let i = 0; i < notes.length; i++) {
//       if (chosen === notes[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
  
//     return res.json(false);
//   });
  
//   app.post('/api/notes', (req, res) => {
//     const newNote = req.body;

//     newNote.routeName = newNote.name.replace(/\s+/g, '').toLowerCase();
//     console.log(newNote);
  
//     notes.push(newNote);
//     res.json(newNote);
//   });



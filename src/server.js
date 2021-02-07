const express = require('express');
const fs = require('fs');
const http = require('http');
const path = require('path');

const app = express();

const PORT = 8080;
const notes = {};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "public",'index.html')));
app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')));
app.get('/api/notes', (req, res) => res.json(notes));

app.get('/api/notes/:character', (req, res) => {
    const chosen = req.params.notes;
  
    console.log(chosen);

    for (let i = 0; i < notes.length; i++) {
      if (chosen === notes[i].routeName) {
        return res.json(characters[i]);
      }
    }
  
    return res.json(false);
  });
  
  app.post('/api/notes', (req, res) => {
    const newNote = req.body;

    newNote.routeName = newNote.name.replace(/\s+/g, '').toLowerCase();
    console.log(newNote);
  
    notes.push(newNote);
    res.json(newNote);
  });

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

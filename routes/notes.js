const notes = require('express').Router();
const { readFromFile, readAndAppend, deleteFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('../helpers/uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

// Delete Route for a note
notes.delete('/user', (req, res) => {
    console.log(note_id);

    deleteFile('./db/db.json').then((data) => res.json(JSON.delete(data)));
});

module.exports = notes;
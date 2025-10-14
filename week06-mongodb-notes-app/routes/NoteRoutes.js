const Note = require('../models/NotesModel.js');
const express = require('express');
const noteRoutes = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
noteRoutes.post('/notes', async (req, res) => {
    try{
        // Validate request
        if(!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        //TODO - Write your code here to save the note
        const { noteTitle, noteDescription, priority } = req.body.content;

        const note = new Note({noteTitle, noteDescription, priority})

        await note.save();

        return res.status(201).json({
            status: true,
            message: "Note successfully created",
            note_id: note._id
        })
    } catch (err){
        console.log("Error: ", err)
        return res.status(500).json({
            status: false,
            message: "Internal server error"
        })
    }

});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
noteRoutes.get('/notes', async (req, res) => {
    try{
        //TODO - Write your code here to returns all note
        const notes = await Note.find();

        return res.status(200).json({
            status: true,
            data: notes
        })

    } catch (err){
        console.log("Error: ", err)
        return res.status(500).json({
            status: false,
            message: "Internal server error"
        })
    }

    
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
noteRoutes.get('/notes/:noteId', async (req, res) => {
    try{
        //TODO - Write your code here to return onlt one note using noteid
        const { noteId } = req.params;

        const note = await Note.findById(noteId);
        
        if (!note){
            return res.status(400).json({
                status: false,
                message: "Note not found"
            })
        }

        return res.status(200).json({
            status: true,
            data: note
        })

    } catch (err){
        console.log("Error: ", err)
        return res.status(500).json({
            status: false,
            message: "Internal server error"
        })
    }

});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
noteRoutes.put('/notes/:noteId', async (req, res) => {
    try{
        // Validate request
        if(!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }

        //TODO - Write your code here to update the note using noteid
        const { noteTitle, noteDescription, priority } = req.body.content;
        const noteToUpdate = {noteTitle, noteDescription, priority};
        const { noteId } = req.params;

        const updatedNote = await Note.findByIdAndUpdate(noteId, noteToUpdate, { new: true })

        if (!updatedNote){
            return res.status(400).json({
                status: false,
                message: "Note not found"
            })
        }

        return res.status(201).json({
            status: true,
            message: "Note successfully updated",
            note_id: updatedNote._id
        })

    } catch (err){
        console.log("Error: ", err)
        return res.status(500).json({
            status: false,
            message: "Internal server error"
        })
    }

});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
noteRoutes.delete('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to delete the note using noteid
    try {
        const { noteId } = req.params;

        const deletedNote = await Note.findByIdAndDelete(noteId);

        if (!deletedNote){
            return res.status(400).json({
                status: false,
                message: "Note not found"
            })
        }

        return res.status(201).json({
            status: true,
            message: "Note successfully deleted",
            note_id: deletedNote._id
        })

    } catch (err){
        console.log("Error: ", err)
        return res.status(500).json({
            status: false,
            message: "Internal server error"
        })
    }
});

module.exports = noteRoutes;

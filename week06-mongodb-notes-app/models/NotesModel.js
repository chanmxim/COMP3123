const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated
const noteSchema = new mongoose.Schema({
    noteTitle: {
        type: String,
        required: true,
        trim: true
    },
    noteDescription: {
        type: String,
        required: true,
        trim: true
    },
    priority: {
        type: String,
        required: true,
        trim: true,
        enum: ['HIGH', 'MEDIUM', 'LOW']
    },

}, {
    timestamps: true
})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
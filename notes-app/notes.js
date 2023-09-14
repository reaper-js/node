import * as fs from 'fs'
import chalk from 'chalk'
const getNotes = () =>  {
    const noteData = loadNotes()
    //const dataJSON = JSON.parse(noteData.toString())
    noteData.forEach(note => {
        console.log(note.title)        
    });
}


const addNote = function(title, body){
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note)=>  note.title === title)
    //more efficient version
    const duplicateNote = notes.find((note) => note.title === title)
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes)
        console.log('Note was taken')
    }else{
        console.log('Title already exists')
    }
}

const removeNotes = function(title){
    const notes = loadNotes()
    
    const existNotes = notes.filter((note) => note.title !== title )
    if(existNotes.length === notes.length){
        console.log(chalk.redBright('No note is removed'))
    }else{
        console.log(chalk.greenBright('Note was removed successfully'))
    }
    saveNotes(existNotes)
}

const readNotes = (title) =>{
    const notes = loadNotes()
    const currrentNote = notes.find((note) => note.title === title )
    if(currrentNote){
        console.log(chalk.green(currrentNote.title));
        console.log(currrentNote.body);
    }else{
        console.log(chalk.redBright('Note not found'));
    }
    
    //console.log(chalk.green(currrentNote.title));
    //console.log(currrentNote.body);
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        return JSON.parse(dataBuffer.toString())
    } catch(e){
        return []
    }
    
}


export {
    getNotes,
    addNote,
    loadNotes,
    removeNotes,
    readNotes,
};
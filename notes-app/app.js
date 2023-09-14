import chalk from 'chalk'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as notes from './notes.js'
import fs from 'fs'
const yarg = yargs(hideBin(process.argv))

//console.log(process.argv)
//add command
yarg.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'body',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//remove command 
yarg.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note Title',  
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
        //console.log('Removing the note')
    }
})

//list command
yarg.command({
    command:'list',
    describe:'list the notes',
    handler(){
        console.log("Listing the notes")
    }
})

//read command
yarg.command({
    command:'read',
    describe:'read the notes',
    handler(){
        console.log("Reading the notes")
    }
})
yarg.version('1.1.0')

yarg.parse()
//console.log(yarg.argv)
/**
 * Created by Dk on 08-07-2017.
 */
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


import NoteInputComponent from './NoteInputComponent';
import NoteMarkdownOutputComponent from './NoteMarkdownOutputComponent';

class NoteToolComponent extends Component{
    constructor(props){
        super(props)

        this.onButtonSave = this.onButtonSave.bind(this);
    }

    onButtonSave() {
        let noteToSave = Object.assign({}, this.props.currentNote);
        noteToSave.time = this.props.player.getCurrentTime().toString().split('.')[0]
        this.props.addNoteToList(noteToSave);
    }

    render() {
        return(
        <Paper className="element" style={{height: "410px", padding: "10px"}} zDepth={1}>
            <div className="row">
                <div className="col-md-6">
                    <NoteInputComponent player={this.props.player} currentNoteChange={this.props.currentNoteChange}/>
                </div>
                <div className="col-md-6">
                    <NoteMarkdownOutputComponent currentNote={this.props.currentNote}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div style={{textAlign: "center", marginTop: "10px"}}>
                        <RaisedButton
                            onClick={this.onButtonSave}
                            labelColor="#fff"
                            label="Save note"
                            backgroundColor="#a4c639"
                        />
                    </div>
                </div>
            </div>
        </Paper>
        )
    }
}

export default NoteToolComponent;
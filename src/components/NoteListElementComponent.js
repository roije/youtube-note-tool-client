/**
 * Created by Dk on 09-07-2017.
 */
import React, { Component } from 'react';

class NoteListElementComponent extends Component{

    constructor(props){
        super(props);

        this.secondsToHMS = this.secondsToHMS.bind(this);
        this.goToTimeInVideo = this.goToTimeInVideo.bind(this);
        this.deleteNote = this.deleteNote.bind(this);

    }

    secondsToHMS(seconds){
        var date = new Date(null);
        date.setSeconds(seconds); // specify value for SECONDS here
        return date.toISOString().substr(11, 8);
    }

    goToTimeInVideo() {
        this.props.player.seekTo(this.props.note.time)
    }

    deleteNote() {
        this.props.deleteNote(this.props.index)
    }


    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="note-list-element">
                        <div className="row">
                            <div className="col-md-6 note-text">
                                {this.props.note.text}
                            </div>
                            <div onClick={this.goToTimeInVideo} style={{color: "#00B16A"}} className="col-md-2">
                                <span id="time-slot">{this.secondsToHMS(this.props.note.time)}</span>
                            </div>
                            <div className="col-md-2">
                                <span style={{marginLeft: "10px", paddingTop: "2px"}} className="glyphicon glyphicon-file"></span>
                            </div>
                            <div className="col-md-2">
                                <span onClick={this.deleteNote} style={{paddingTop: "2px"}} className="glyphicon glyphicon-trash"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoteListElementComponent;
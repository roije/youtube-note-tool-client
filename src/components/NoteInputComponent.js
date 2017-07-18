/**
 * Created by Dk on 08-07-2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class NoteInputComponent extends Component{
    constructor(props){
        super(props)

        this.onChange = this.onChange.bind(this);
        this.getTimeInSeconds = this.getTimeInSeconds.bind(this);
    }

    onChange(e){
        let currentTime = this.props.player !== null ? this.getTimeInSeconds(this.props.player) : 0
        let note = {
            text: e.target.value,
            time: currentTime
        }
        this.props.currentNoteChange(note)
    }

    getTimeInSeconds(player) {
        let time = player.getCurrentTime();
        return time.toString().split('.')[0]
    }

    render() {
        return(
            <div>
                <h4>New note</h4>
                <textarea id="note-input" onChange={this.onChange}/>
            </div>
        )
    }
}

NoteInputComponent.propTypes = {
    currentNoteChange: PropTypes.func
}

export default NoteInputComponent;
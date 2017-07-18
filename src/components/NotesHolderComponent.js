/**
 * Created by Dk on 09-07-2017.
 */
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import NotesHolderHeaderComponent from './NotesHolderHeaderComponent';
import NoteListComponent from './NoteListComponent';

class NotesHolderComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Paper id="notes-holder-component" zDepth={1}>
                <NotesHolderHeaderComponent/>
                <NoteListComponent player={this.props.player} notes={this.props.notes}/>
            </Paper>
        )
    }
}

export default NotesHolderComponent;
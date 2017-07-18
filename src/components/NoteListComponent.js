/**
 * Created by Dk on 09-07-2017.
 */
import React from 'react';

import NoteListElementComponent from './NoteListElementComponent'

const NoteListComponent = props => {
    return(
        <div>
            {props.notes.map((note, index) =>
                <NoteListElementComponent player={props.player} note={note} key={index}/>
            )}
        </div>
    )
}

export default NoteListComponent;
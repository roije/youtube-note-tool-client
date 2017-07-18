/**
 * Created by Dk on 08-07-2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'

class NoteMarkdownOutputComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h4>Preview</h4>
                <div id="note-output">
                    <ReactMarkdown source={this.props.currentNote.text}/>
                </div>
            </div>

        )
    }
}

NoteMarkdownOutputComponent.PropTypes = {
    currentNote: PropTypes.string
}

export default NoteMarkdownOutputComponent;
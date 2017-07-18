/**
 * Created by Dk on 09-07-2017.
 */
import React, { Component } from 'react'

class NotesHolderHeaderComponent extends Component{


    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="note-holder-header">
                        <div className="row">
                            <div className="col-md-6">
                                <h5><b>Notebook</b></h5>
                            </div>
                            <div className="col-md-6 download-icon-holder">
                                <span className="glyphicon glyphicon-download-alt"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotesHolderHeaderComponent;
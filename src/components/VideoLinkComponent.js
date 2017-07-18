/**
 * Created by Dk on 07-07-2017.
 */
import React, { Component } from 'react';

class VideoLinkComponent extends Component{

    constructor(props){
        super(props)

        this.linkChange = this.linkChange.bind(this);
        this.pluckIdFromLink = this.pluckIdFromLink.bind(this);
    }

    pluckIdFromLink(value) {
        var videoid = value.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        if(videoid != null) {
            console.log('hey');
            return videoid[1];
        } else {
            return null;
        }
    }

    linkChange(e){
        if(e.target.value !== "") {
            let value = e.target.value;
            let videoId = this.pluckIdFromLink(value);
            if(videoId !== null) {
                this.props.setVideoId(videoId);
                this.props.setValidValue(true)
            }
            else{
                this.props.setVideoId(null);
                this.props.setValidValue(false)
            }
        }
    }

    render(){
        return(
            <input
                ref="item"
                className="element"
                id="video-link-field"
                placeholder="Insert YouTube link..."
                type="text"
                onChange={this.linkChange}/>
        )
    }
}

export default VideoLinkComponent;
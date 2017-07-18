/**
 * Created by Dk on 07-07-2017.
 */
import React, { Component} from 'react';
import YouTube from 'react-youtube';
import Paper from 'material-ui/Paper';

class VideoComponent extends Component{
    constructor(props){
        super(props)

        this.onReady = this.onReady.bind(this);
    }

    onReady(event) {
        this.props.setPlayerObject(event.target);
    }

    render(){
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

        return(
            <div className="video-container">
                { this.props.isValid
                ? <YouTube
                        onReady={this.onReady}
                        videoId={this.props.videoId}
                        opts={opts}
                    />
                    : <Paper id="no-video-container">
                        <div id="no-video-container-content">
                            <a  target="_blank" href="https://www.youtube.com">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3>Please provide a valid youtube video</h3>
                                    </div>
                                </div>
                                <div style={{color: "#00B16A"}} className="row">
                                    <div className="col-md-12">
                                        <h1 className="glyphicon glyphicon-upload"></h1>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Paper>}

            </div>
        )
    }
}

export default VideoComponent;
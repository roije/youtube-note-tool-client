import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { saySomething } from '../redux/modules/test/test-actions';
import { updateYoutubeVideoLink, setPlayerObject, setVideoId, setValidValue } from '../redux/modules/youtube-video/youtube-video-actions';
import { currentNoteChange, addNoteToList, deleteNoteFromList } from '../redux/modules/notes/note-actions';

import Home from '../Test';
import VideoComponent from '../components/VideoComponent';
import VideoLinkComponent from '../components/VideoLinkComponent';
import NoteToolComponent from "../components/NoteToolComponent";
import NotesHolderComponent from '../components/NotesHolderComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-sm-6 col-xs-12">
                      <VideoComponent videoId={this.props.videoId}
                                      isValid={this.props.isValid}
                                      setPlayerObject={this.props.setPlayerObject}
                                      link={this.props.youtubeLink}/>
                      <VideoLinkComponent setVideoId={this.props.setVideoId}
                                          updateVideoLink={this.props.updateYoutubeVideoLink}
                                          setValidValue={this.props.setValidValue}
                                          test={this.test}
                      />
                      <NoteToolComponent
                          player={this.props.player}
                          currentNote={this.props.currentNote}
                          currentNoteChange={this.props.currentNoteChange}
                          addNoteToList={this.props.addNoteToList}
                          isValid={this.props.isValid}/>
                  </div>
                  <div className="col-md-3">
                      <NotesHolderComponent player={this.props.player} deleteNote={this.props.deleteNoteFromList} notes={this.props.notes}/>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        saying: state.testReducer.saying,
        player: state.youtubeVideoLinkReducer.player,
        youtubeLink: state.youtubeVideoLinkReducer.youtubeLink,
        currentNote: state.noteReducer.currentNote,
        notes: state.noteReducer.notes,
        videoId: state.youtubeVideoLinkReducer.videoId,
        isValid: state.youtubeVideoLinkReducer.isValid
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    saySomething,
    updateYoutubeVideoLink,
    currentNoteChange,
    addNoteToList,
    setPlayerObject,
    setVideoId,
    setValidValue,
    deleteNoteFromList
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
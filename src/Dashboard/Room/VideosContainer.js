import React from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import Video from './Video';

const MainContainer = styled('div')({
  width: "100%",
  height: "85%",
  display: "flex",
  flexWrap: "wrap",
});

const VideosContainer = ({ localStream, remoteStreams, screenSharingStream }) => {
  console.log(screenSharingStream);
  return (
    <MainContainer>
      <Video stream={screenSharingStream ? screenSharingStream: localStream} isLocalStream />
      { remoteStreams.map(stream => <Video 
        stream={stream}
        key={stream.id}
      />)}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  }
};

export default connect(mapStoreStateToProps)(VideosContainer);
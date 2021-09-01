import React from 'react';
import VideoItem from './VideoItem';
import styled from "@emotion/styled"


const VideoList = ({videos, onVideoDisplay}) => {
  const videolistitem = videos.map(video => {
    return <VideoItem onVideoDisplay={onVideoDisplay} video={video} />
  })
    return (
      <Container>
      {videolistitem}
      </Container>
    )
}

export default VideoList;


const Container = styled.div`
	width: 35%;
`;
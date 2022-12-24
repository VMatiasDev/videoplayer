import React from 'react';
import styled from 'styled-components';

const VideoPlayerContainer = styled.div`
  width: 70%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const Title = styled.h2`
  color: white;
  margin: 10px 0 20px;
`;

const Description = styled.div`
  background-color: rgba(128, 128, 128, 0.2);
  border-radius: 5px;
  color: #fff;
  padding: 5px;
`;

function VideoPlayer({ data }) {
  return (
    <VideoPlayerContainer>
      <Video src={data.videoSrc} controls />
      <Title>{data.videoName}</Title>
      <Description>{data.description}</Description>
    </VideoPlayerContainer>
  );
}

export default VideoPlayer;

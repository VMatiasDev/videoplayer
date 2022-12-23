import React from 'react';
import styled from 'styled-components';
import Data from './data';

const SidebarContainer = styled.aside`
  width: 100%;
  background-color: #eee;
  padding: 20px;
  @media screen and (min-width: 1200px) {
    width: 20%;
  }
`;

const VideoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const VideoListItem = styled.li`
  margin-bottom: 10px;
`;

const VideoThumbnail = styled.img`
  width: 100%;
`;

const VideoTitle = styled.h3`
  font-size: 16px;
  margin-top: 10px;
`;

function VideoSidebar({}) {
  return (
    <SidebarContainer>
      <VideoList>
        {Data.map((data) => (
          <VideoListItem key={data.id}>
            <VideoThumbnail src={data.imgSrc} alt={data.videoName} />
            <VideoTitle>{data.videoName}</VideoTitle>
          </VideoListItem>
        ))}
      </VideoList>
    </SidebarContainer>
  );
}

export default VideoSidebar;

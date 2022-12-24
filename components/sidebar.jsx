import React from 'react';
import styled from 'styled-components';
import Data from './data';

const SidebarContainer = styled.aside`
  width: 20%;
  background-color: rgba(128, 128, 128, 0.2);
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 30%;
  }
`;

const VideoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const VideoListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;

const VideoThumbnail = styled.img`
  width: 100%;
`;

const VideoTitle = styled.h3`
  font-size: 1rem;
  color: #fff;
`;

function VideoSidebar({ setVideo }) {
  return (
    <SidebarContainer>
      <VideoList className='videolist'>
        {Data.map((data) => (
          <VideoListItem
            key={data.id}
            onClick={() =>
              setVideo({
                videoName: data.videoName,
                videoSrc: data.videoSrc,
                description: data.description,
              })
            }
          >
            <VideoThumbnail src={data.imgSrc} alt={data.videoName} />
            <VideoTitle>{data.videoName}</VideoTitle>
          </VideoListItem>
        ))}
      </VideoList>
    </SidebarContainer>
  );
}

export default VideoSidebar;

import React, { useState } from 'react';
import styled from 'styled-components';
import Data from './data';

const SidebarContainer = styled.aside`
  width: 20%;
  background-color: rgba(128, 128, 128, 0.2);
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 30%;
  }
  button {
    cursor: pointer;
    width: 70px;
    padding: 10px;
    margin-right: 5px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
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
  const [filters, setFilters] = useState({ tag: 'Todas' });

  const handleFilterChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const applyFilters = (videos, filters) => {
    if (filters.tag !== 'Todas') {
      videos = videos.filter((video) => video.tag === filters.tag);
    }
    return videos;
  };

  const filteredVideos = applyFilters(Data, filters);

  return (
    <SidebarContainer>
      <button name='tag' value='Todas' onClick={handleFilterChange}>
        Todas
      </button>
      <button name='tag' value='lobo' onClick={handleFilterChange}>
        Lobo
      </button>
      <button name='tag' value='leao' onClick={handleFilterChange}>
        Leão
      </button>
      <button name='tag' value='cachorro' onClick={handleFilterChange}>
        Cão
      </button>
      <button name='tag' value='gato' onClick={handleFilterChange}>
        Gato
      </button>
      <button name='tag' value='macaco' onClick={handleFilterChange}>
        Macaco
      </button>
      <VideoList className='videolist'>
        {filteredVideos.map((data) => (
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

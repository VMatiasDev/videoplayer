import Head from 'next/head';
import { useState } from 'react';
import { Main, Wrapper } from '../components/sharedstyles';
import VideoSidebar from '../components/sidebar';
import VideoPlayer from '../components/videoplayer';
import Data from '../components/data';

export default function Home() {
  const [isVideo, setVideo] = useState({
    videoName: Data[0].videoName,
    videoSrc: Data[0].videoSrc,
    description: Data[0].description,
  });

  return (
    <>
      <Head>
        <title>Video Player - Direção Concursos</title>
        <meta name='description' content='Desafio Prático Direção Concursos' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper className='wrapper'>
        <Main>
          <h1>Video Player</h1>
          <br />
          <button onClick={toggleTheatreMode}>Modo Teatro</button>
          <br />
          <VideoPlayer data={isVideo} />
        </Main>
        <VideoSidebar setVideo={setVideo} />
      </Wrapper>
    </>
  );
}

function toggleTheatreMode() {
  const video = document.querySelector('video');
  const wrapper = document.querySelector('.wrapper');
  const aside = document.querySelector('aside');
  const isTheatreMode = video.classList.toggle('theatre-mode');

  if (isTheatreMode) {
    video.style.width = '135%';
    video.style.height = '135%';
    wrapper.style.display = 'block';
    aside.style.marginLeft = '69%';
    aside.style.marginTop = '-5%';
  } else {
    video.style.width = '100%';
    video.style.height = '100%';
    wrapper.style.display = 'flex';
    aside.style.marginLeft = '0';
    aside.style.marginTop = '0';
  }
}

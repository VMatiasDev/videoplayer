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
      <Wrapper>
        <Main>
          <h1>Video Player</h1>
          <VideoPlayer data={isVideo} />
        </Main>
        <VideoSidebar setVideo={setVideo} />
      </Wrapper>
    </>
  );
}

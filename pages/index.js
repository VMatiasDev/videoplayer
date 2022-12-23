import Head from 'next/head';
import { Main } from '../components/sharedstyles';
import VideoPlayer from '../components/videoplayer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Video Player - Direção Concursos</title>
        <meta name='description' content='Desafio Prático Direção Concursos' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main>
        <h1>Video Player</h1>
        <VideoPlayer />
      </Main>
    </>
  );
}

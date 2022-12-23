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

const VideoPlayer = ({ src }) => {
  return (
    <VideoPlayerContainer>
      <Video src={src} controls />
      <Title>Título do Vídeo</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, qui
        deleniti. Officia recusandae velit, consequuntur doloremque laudantium
        ad similique tempora. Animi blanditiis ipsum atque ratione beatae
        soluta. Necessitatibus, eveniet id! Harum non maxime dignissimos magnam
        consequuntur doloremque excepturi voluptas hic explicabo mollitia autem
        molestiae deleniti inventore temporibus voluptatem commodi aut porro
        doloribus odit quasi nihil veniam earum, similique dicta! Laboriosam.
        Quisquam nisi voluptates, quis illo sint architecto velit aperiam, quasi
        obcaecati quo voluptas fuga dicta placeat non, ipsam nostrum omnis sequi
        distinctio doloremque vitae a? Ipsum, voluptatem! Delectus, consequatur
        labore? Architecto adipisci omnis aliquam sit beatae, excepturi delectus
        quo hic ab autem assumenda libero perspiciatis itaque voluptatem! Error
        omnis rem assumenda reiciendis obcaecati alias quas inventore corporis
        excepturi necessitatibus! Sapiente.
      </Description>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;

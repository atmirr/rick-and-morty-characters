import React from 'react';
import styled from 'styled-components';
import Modal from './components/Modal';

const ModalTitle = styled.h4`
  padding: 5px 0;
  font-size: 20px;
  font-weight: 600;
`;

const ModalWrapper = styled.div`
  background-color: #ffffff;
  text-align: center;
  width: 400px;
  max-width: 100%;
  height: 500px;
  max-height: 100%;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5em 1.3em;
  margin: 1.1em 0.9em;
  border-radius: 15px;
  overflow: auto;
  cursor: default;
`;

const EpisodesList = styled.ul`
  text-align: left;
  list-style-type: none;
`;

const EpisodeItem = styled.li`
  padding: 5px 0;
`;

type PropTypes = {
  episodes?: string[];
  handleCloseModal: () => void;
};

function EpisodesModal({
  episodes = [],
  handleCloseModal,
}: PropTypes): React.ReactElement {
  return (
    <Modal defaultOpened fade handleCloseModal={handleCloseModal}>
      <ModalWrapper>
        <ModalTitle>List of Featured Episodes</ModalTitle>
        <EpisodesList>
          {episodes.map((episode, index) => (
            <EpisodeItem key={index}>{episode}</EpisodeItem>
          ))}
        </EpisodesList>
      </ModalWrapper>
    </Modal>
  );
}

export default EpisodesModal;

import React, { useState } from 'react';
import styled from 'styled-components';
import EpisodesModal from './components/EpisodesModal';

const Wrapper = styled.div`
  display: flex;
  padding: 6px 1px;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #7c7c7c;
`;

const Value = styled.span`
  padding-left: 3px;
  color: #222222;
`;

const MoreLabel = styled.a`
  font-weight: 500;
  color: #1976d2;
  cursor: pointer;
`;

type PropTypes = {
  label?: string;
  children: string[];
};

function EpisodesItem({
  label = 'Episodes',
  children: episodes,
}: PropTypes): React.ReactElement {
  const firstEpisode = episodes?.[0];
  const episodesLength = episodes?.length;
  const moreEpisodesText = `and ${episodesLength - 1} more`;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <>
      <Wrapper data-testid="episodes-item">
        <Label>{label}:</Label>
        <div>
          <Value>{firstEpisode}</Value>{' '}
          {episodesLength > 1 && (
            <MoreLabel onClick={handleOpenModal}>{moreEpisodesText}</MoreLabel>
          )}
        </div>
      </Wrapper>
      {isModalOpen && (
        <EpisodesModal
          episodes={episodes}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}

export default EpisodesItem;

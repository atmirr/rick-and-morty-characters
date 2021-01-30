import React from 'react';
import styled from 'styled-components';
import BasicInfoItem from './components/BasicInfoItem';
import DetailItem from './components/DetailItem';
import LocationItem from './components/LocationItem';
import EpisodesItem from './components/EpisodesItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 230px;
  text-align: center;
  padding: 1.3em 1.3em 0.5em 1.3em;
  margin: 1.1em 0.9em;
  border-radius: 15px;
  box-shadow: 0 0 6px 4px #e3e3e3;
  transition: all 300ms ease-out;
  &:hover {
    box-shadow: 0 0 14px 2px #aaaaaa;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: 15px;
  & img {
    border-radius: 15px;
  }
`;
const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: left;
  padding: 12px 0;
`;

const Name = styled.span`
  font-size: 22px;
  padding-bottom: 2px;
`;

const LocationItems = styled.div`
  padding: 2px 0;
`;

type PropTypes = {
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
  episodes: string[];
  locationName?: string;
  locationType?: string;
  dimension?: string;
  numberOfResidents?: number;
};

function ProfileCard({
  name,
  species,
  status,
  gender,
  image,
  episodes,
  locationName,
  locationType,
  dimension,
  numberOfResidents,
}: PropTypes): React.ReactElement {
  return (
    <Container data-testid="profile-card">
      <ImageWrapper>
        <img src={image} alt={name} width={220} height={220} />
      </ImageWrapper>
      <DetailsWrapper>
        <Name>{name}</Name>
        <BasicInfoItem species={species} status={status} gender={gender} />
        <LocationItems>
          <LocationItem label="Dimension">{dimension}</LocationItem>
          <LocationItem label="Location">{locationName}</LocationItem>
          <LocationItem label="Location Type">{locationType}</LocationItem>
        </LocationItems>
        <DetailItem label="Number of Residents">{numberOfResidents}</DetailItem>
        {episodes && <EpisodesItem>{episodes}</EpisodesItem>}
      </DetailsWrapper>
    </Container>
  );
}

export default ProfileCard;

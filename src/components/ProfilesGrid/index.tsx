import React from 'react';
import { isEmpty } from 'lodash';
import styled from 'styled-components';
import ProfilePlaceholders from './components/ProfilePlaceholders';
import ProfileItem from './components/ProfileItem';

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 40px;
`;

const Grid = styled.div`
  padding: 30px 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ErrorWrapper = styled.div`
  text-align: center;
`;

const Error = styled.span`
  font-size: 16px;
  color: #c53c3c;
`;

type PropTypes = {
  profiles: {
    id: number;
    name: string;
    species: string;
    status: string;
    gender: string;
    image: string;
    episode: string[];
    location: {
      name: string;
      url: string;
    };
  }[];
  error: string | null;
  isLoading: boolean;
};

function ProfilesGrid({
  profiles,
  error,
  isLoading,
}: PropTypes): React.ReactElement {
  const errorText = `There is something wrong! Error: ${error}`;
  return (
    <Container data-testid="profiles-grid">
      <Grid>
        {!isEmpty(profiles) &&
          profiles.map(
            ({
              id,
              name,
              species,
              status,
              gender,
              image,
              episode,
              location,
            }) => (
              <ProfileItem
                name={name}
                species={species}
                status={status}
                gender={gender}
                image={image}
                locationUrl={location?.url}
                episodeUrls={episode}
                key={id}
              />
            ),
          )}
        {isLoading && <ProfilePlaceholders count={20} />}
      </Grid>
      {error && (
        <ErrorWrapper>
          <Error>{errorText}</Error>
        </ErrorWrapper>
      )}
    </Container>
  );
}

export default ProfilesGrid;

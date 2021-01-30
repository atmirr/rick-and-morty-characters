import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getEpisodesByUrls } from 'src/selectors/episodes';
import { getLocation } from 'src/selectors/locations';
import ProfileCard from './components/ProfileCard';

type PropTypes = {
  locationUrl: string;
  episodeUrls: string[];
  name: string;
  species: string;
  status: string;
  gender: string;
  image: string;
};

function ProfileItem({
  locationUrl,
  episodeUrls,
  ...props
}: PropTypes): React.ReactElement {
  const episodes = useSelector(getEpisodesByUrls(episodeUrls));
  const location = useSelector(getLocation(locationUrl));
  const numberOfResidents = location?.residents?.length;
  return (
    <ProfileCard
      episodes={episodes}
      locationName={location?.name}
      locationType={location?.type}
      dimension={location?.dimension}
      numberOfResidents={numberOfResidents}
      {...props}
    />
  );
}

export default memo(ProfileItem);

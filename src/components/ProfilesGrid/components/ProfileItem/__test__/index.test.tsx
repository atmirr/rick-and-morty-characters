import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'src/utils/test-utils';
import { characters } from 'src/utils/mocked-data';

import ProfileItem from '../index';

const props = {
  name: characters[0].name,
  species: characters[0].species,
  status: characters[0].status,
  gender: characters[0].gender,
  image: characters[0].image,
  locationUrl: characters[0].location?.url,
  episodeUrls: characters[0].episode,
};

describe('<ProfileItem />', () => {
  it('should renders the component', () => {
    const { container } = render(<ProfileItem {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from 'src/utils/test-utils';
import { episodes } from 'src/utils/mocked-data';
import EpisodesModal from '../index';

describe('<EpisodesModal />', () => {
  it('should renders the component', () => {
    const { container } = render(<EpisodesModal />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display the modal by default', () => {
    render(<EpisodesModal />);
    expect(screen.getAllByTestId('modal').length).toBe(1);
    expect(screen.queryAllByText(/List of featured episodes/i).length).toBe(1);
  });

  it('should display the list of the episodes if the episodes props has been set', () => {
    render(<EpisodesModal episodes={episodes} />);
    expect(screen.getAllByTestId('modal').length).toBe(1);
    expect(screen.queryAllByText(/List of featured episodes/i).length).toBe(1);
    episodes.forEach((episode) => {
      expect(screen.queryAllByText(episode).length).toBe(1);
    });
  });
});

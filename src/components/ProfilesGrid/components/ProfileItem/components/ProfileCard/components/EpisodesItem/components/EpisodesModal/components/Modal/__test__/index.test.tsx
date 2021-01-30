import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from 'src/utils/test-utils';
import { episodes } from 'src/utils/mocked-data';
import Modal from '../index';

const children = (
  <ul>
    {episodes.map((episode, i) => (
      <li key={i}>{episode}</li>
    ))}
  </ul>
);

describe('<Modal />', () => {
  it('should renders the component', () => {
    const { container } = render(<Modal />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not display the modal by default', () => {
    render(<Modal />);
    expect(screen.queryAllByTestId('modal').length).toBe(0);
  });

  it('should display the modal when defaultOpened prop set to true', () => {
    render(<Modal defaultOpened />);
    expect(screen.queryAllByTestId('modal').length).toBe(1);
  });

  it('should display the given children component in the modal when children  has been set', () => {
    const { queryAllByTestId, unmount } = render(
      <Modal defaultOpened>{children}</Modal>,
    );
    // We are using React Portal for the Modal component
    // to attach it to the document.body
    // so we have to consider document.body as our container for our tests
    const container = document.body;
    expect(queryAllByTestId('modal').length).toBe(1);
    expect(container.querySelectorAll('ul').length).toBe(1);
    expect(container.querySelectorAll('li').length).toBe(episodes.length);
    episodes.forEach((episode) => {
      expect(screen.getAllByText(episode).length).toBe(1);
    });
    // Clean up the document.body
    unmount();
  });
});

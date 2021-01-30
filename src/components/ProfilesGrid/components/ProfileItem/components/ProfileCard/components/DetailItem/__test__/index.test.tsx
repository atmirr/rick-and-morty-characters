import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from 'src/utils/test-utils';
import DetailItem from '../index';

const props = {
  label: 'Number of residents',
  children: 10,
};

describe('<DetailItem />', () => {
  it('should renders the component', () => {
    const { container } = render(<DetailItem />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display label and children when these props has been set', () => {
    render(<DetailItem label={props.label}>{props.children}</DetailItem>);
    expect(screen.queryAllByText(`${props.label}:`).length).toBe(1);
    expect(screen.queryAllByText(props.children).length).toBe(1);
  });

  it('should support jsx element as the children', () => {
    const { container } = render(
      <DetailItem>
        <h6>I'm a JSX element</h6>
      </DetailItem>,
    );
    const h6Element = container.querySelectorAll('h6');
    expect(h6Element.length).toBe(1);
    expect(screen.queryAllByText("I'm a JSX element").length).toBe(1);
  });
});

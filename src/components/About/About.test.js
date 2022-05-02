import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('should render default About', () => {
    const aboutProps = {
      onClick: jest.fn(),
    };

    const wrapper = render(
      <About {...aboutProps}>
      </About>
    ).container.firstChild;

    expect(wrapper).toHaveClass('about');
   
  });
});
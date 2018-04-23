/* eslint-env mocha,chai */

import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CategoryDropdown from '../CategoryDropdown';
// import { MemoryRouter } from 'react-router-dom';

const adapter = new Adapter();
// const disableLifecycleMethods = true;
enzyme.configure({
  adapter
  // disableLifecycleMethods
});

describe('CategoryDropdown', () => {
  // const resolves = () => Promise.resolve('Oh yeah');
  // const rejects = () => Promise.reject(new Error('Oh noes'));
  const categories = {
    1: { id: 1, name: 'Blasters' },
    2: { id: 2, name: 'Lightsabers' }
  };

  it('renders correct number of link items', () => {
    const cd = shallow(<CategoryDropdown categories={categories} />);
    expect(cd.find('Link').length).to.equal(3);
  });

  it('renders correct names for category items', () => {
    const cd = shallow(<CategoryDropdown categories={categories} />);
    const links = cd.find('Link');
    expect(links.at(0).props().children).to.equal('All Categories');
    expect(links.at(1).props().children).to.equal('Blasters');
    expect(links.at(2).props().children).to.equal('Lightsabers');
  });
});

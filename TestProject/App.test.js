import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

import LotsOfGreetings from './components/Greeting.js';
it('Greeting components without crashing', () => {
  const rendered = renderer.create(<LotsOfGreetings />).toJSON();
  expect(rendered).toBeTruthy();
});

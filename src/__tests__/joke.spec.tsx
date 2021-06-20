import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { mockedData } from '../fixtures';

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock('../services/jokeApi');

test('Renders component without crashing', async () => {
  const wrapper = render(<App />);
  await waitFor(() => wrapper);

  expect(wrapper).toMatchSnapshot();
  wrapper.unmount();
});

test('Renders a joke correctly', async () => {
  const wrapper = render(<App />);
  await waitFor(() => wrapper);

  expect(wrapper.getByTestId('new-joke')).toHaveTextContent(mockedData.value);
  wrapper.unmount();
});

test('Renders a new joke with button click', async () => {
  const wrapper = render(<App />);
  await waitFor(() => wrapper);

  await waitFor(() => {
    userEvent.click(wrapper.getByTestId('joke-button'));
  });
  expect(wrapper.getByTestId('new-joke')).toHaveTextContent('Hell');

  wrapper.unmount();
});

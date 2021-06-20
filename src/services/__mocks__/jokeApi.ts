import { mockedData, mockedRefetchData } from '../../fixtures';

export const getARandomJoke = async () => {
  return await new Promise((resolve) => resolve(mockedData));
};

export const getRefetch = async () => {
  return await new Promise((resolve) => resolve(mockedRefetchData));
};

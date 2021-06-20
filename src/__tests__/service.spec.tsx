import axios, { AxiosResponse } from 'axios';
import { mockedData } from '../fixtures';
import { getARandomJoke } from '../services/jokeApi';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedResponse: AxiosResponse = {
  data: mockedData,
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
};

describe('getStory functionality', () => {
  it('requests and gets a story from the HackerNews Api', async () => {
    mockedAxios.get.mockResolvedValue(mockedResponse);

    const entity = await getARandomJoke();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(entity).toEqual(mockedData);
  });
});

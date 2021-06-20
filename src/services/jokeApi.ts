import axios from 'axios';

export const URI = 'https://api.chucknorris.io/jokes/random';

export type ApiType = {
  categories: [];
  created_at: Date;
  id: string;
  updated_at: Date;
  value: string;
};

export const getARandomJoke = async () => {
  const { data } = await axios.get<ApiType>(URI);
  return data;
};

export const getRefetch = async () => {
  const { data } = await axios.get<ApiType>(URI);
  return data;
};

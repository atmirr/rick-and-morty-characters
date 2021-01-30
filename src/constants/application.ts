const BASE_URL = 'https://rickandmortyapi.com/api';

export const API = {
  CHARACTERS_URL: `${BASE_URL}/character`,
  EPISODES_URL: `${BASE_URL}/episode`,
  LOCATIONS_URL: `${BASE_URL}/location`,
};

export const ERROR_MESSAGES: { [key: string]: string } = {
  404: 'No result.',
};

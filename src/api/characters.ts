import { ERROR_MESSAGES } from '../constants/application';
import { CharactersType } from '../constants/types';

export const fetchCharacters = async (
  endpoint: string,
): Promise<CharactersType | Error> => {
  const response = await fetch(endpoint);
  const data = await response.json();
  if (response.status >= 400) {
    // Handle custom error messages
    if (ERROR_MESSAGES?.[response.status]) {
      throw new Error(ERROR_MESSAGES?.[response.status]);
    }
    throw new Error(data.errors);
  }
  return data;
};

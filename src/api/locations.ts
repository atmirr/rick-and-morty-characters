import { API, ERROR_MESSAGES } from '../constants/application';
import { LocationsType } from '../constants/types';

export const fetchLocations = async (
  locationsIdsQuery: string,
): Promise<LocationsType | Error> => {
  const baseUrl = API.LOCATIONS_URL;
  const endpoint = locationsIdsQuery
    ? `${baseUrl}/${locationsIdsQuery}`
    : baseUrl;
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

import { LocationsType } from '../constants/types';

export const LOCATIONS_LOAD = 'LOCATIONS_LOAD';
export const LOCATIONS_LOAD_SUCCESS = 'LOCATIONS_LOAD_SUCCESS';
export const LOCATIONS_LOAD_FAIL = 'LOCATIONS_LOAD_FAIL';

export const loadLocations = (): { type: typeof LOCATIONS_LOAD } => ({
  type: LOCATIONS_LOAD,
});

export const setLocations = (
  locations: LocationsType,
): { type: typeof LOCATIONS_LOAD_SUCCESS; locations: LocationsType } => ({
  type: LOCATIONS_LOAD_SUCCESS,
  locations,
});

export const setError = (
  error: string,
): { type: typeof LOCATIONS_LOAD_FAIL; error: string } => ({
  type: LOCATIONS_LOAD_FAIL,
  error,
});

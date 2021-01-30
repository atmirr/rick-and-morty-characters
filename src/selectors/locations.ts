import { createSelector } from 'reselect';
import { RootState } from '../reducers';

export const getLocations = (state: RootState) => state.locations;

export const getLocation = (locationUrl: string) =>
  createSelector(getLocations, (locations) =>
    locations.items.find(({ url }) => url === locationUrl),
  );

export const filterNonExistingLocations = (locationUrls: string[]) =>
  createSelector(getLocations, (locations) =>
    locationUrls.filter((locationUrl) => {
      const foundedItem = locations.items.find(
        (locationItem) => locationItem.url === locationUrl,
      );
      return foundedItem === undefined ? true : false;
    }),
  );

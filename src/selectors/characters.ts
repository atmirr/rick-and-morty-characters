import { createSelector } from 'reselect';
import { RootState } from '../reducers';

export const getCharacters = (state: RootState) => state.characters;

export const nextPageEndpoint = () =>
  createSelector(getCharacters, (characters) => characters.nextPage);

export const hasMorePages = () =>
  createSelector(nextPageEndpoint, (nextPage) => nextPage !== null);

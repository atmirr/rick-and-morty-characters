import { createSelector } from 'reselect';
import { RootState } from '../reducers';

export const getEpisodes = (state: RootState) => state.episodes;

export const getEpisodesByUrls = (episodesUrls: string[]) =>
  createSelector(getEpisodes, (episodes) => {
    return episodesUrls.reduce((result: string[], episodeUrl: string) => {
      const episodeInfo = episodes.items?.find(({ url }) => url === episodeUrl);
      if (episodeInfo) {
        return [...result, episodeInfo.name];
      }
      return [...result];
    }, []);
  });

export const nextPageEndpoint = () =>
  createSelector(getEpisodes, (episodes) => episodes.nextPage);

export const hasMorePages = () =>
  createSelector(nextPageEndpoint, (nextPage) => nextPage !== null);

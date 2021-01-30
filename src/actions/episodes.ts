import { EpisodesType } from '../constants/types';

export const EPISODES_LOAD = 'EPISODES_LOAD';
export const EPISODES_LOAD_SUCCESS = 'EPISODES_LOAD_SUCCESS';
export const EPISODES_LOAD_FAIL = 'EPISODES_LOAD_FAIL';

export const loadEpisodes = (): { type: typeof EPISODES_LOAD } => ({
  type: EPISODES_LOAD,
});

export const setEpisodes = (
  episodes: EpisodesType,
): { type: typeof EPISODES_LOAD_SUCCESS; episodes: EpisodesType } => ({
  type: EPISODES_LOAD_SUCCESS,
  episodes,
});

export const setError = (
  error: string,
): { type: typeof EPISODES_LOAD_FAIL; error: string } => ({
  type: EPISODES_LOAD_FAIL,
  error,
});

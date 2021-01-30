import {
  EPISODES_LOAD,
  EPISODES_LOAD_SUCCESS,
  EPISODES_LOAD_FAIL,
} from '../actions/episodes';
import { EpisodesResultsType, EpisodesType } from '../constants/types';

type StateType = {
  items: EpisodesResultsType | [];
  nextPage: string | null;
  error: string | null;
  isLoading: boolean;
};

type ActionType = {
  type: string;
  episodes?: EpisodesType;
  error?: string;
};

const episodesReducer = (
  state: StateType = {
    items: [],
    nextPage: null,
    error: null,
    isLoading: false,
  },
  action: ActionType,
): StateType => {
  switch (action.type) {
    case EPISODES_LOAD: {
      return { ...state, error: null, isLoading: true };
    }
    case EPISODES_LOAD_SUCCESS: {
      const items = action?.episodes?.results || [];
      const nextPageEndpoint = action?.episodes?.info?.next || null;
      return {
        items: [...state.items, ...items],
        nextPage: nextPageEndpoint,
        error: null,
        isLoading: false,
      };
    }
    case EPISODES_LOAD_FAIL: {
      const error = action.error || null;
      return {
        ...state,
        error,
        isLoading: false,
      };
    }
  }
  return state;
};

export default episodesReducer;
